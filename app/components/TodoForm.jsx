"use client"
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import * as Yup from 'yup'
import { collection, addDoc, getDocs, doc, updateDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase';
import { FaTrashAlt } from "react-icons/fa";

const TodoForm = () => {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    // function to fetch todos
    const fetchTodos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'todos'))
        const todosData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setTodos(todosData)
        console.log(todosData);

      } catch (error) {
        console.error("Error fetching data: ", error)
      }
    }

    fetchTodos();
  }, [])

  const initVal = {
    title: '',
  }

  const formValidation = Yup.object().shape({
    title: Yup.string()
      .required('Please enter a task')
  })

  const handleSubmit = async (values, { resetForm }) => {
    try {

      console.log(values);

      // create a document to be stored
      const info = {
        title: values.title,
        createdAt: new Date(),
        completed: false
      }
      // add this document to the database
      const docRef = collection(db, "todos")
      await addDoc(docRef, info)

      // fetch updated list from db
      // const querySnapshot = await getDocs(collection(db, 'todos'))
      // const todosData = querySnapshot.docs.map(doc => ({
      //   id: doc.id,
      //   ...doc.data()
      // }))

      // setTodos(todosData)

      // Appending new tasks to the array
      setTodos(prevTodos => [...prevTodos, { id: docRef.id, ...info }])

      resetForm()

    } catch (error) {
      console.error("Error adding task: ", error)
    }

  }

  const check = async (infoId, currentStatus) => {
    try {
      // update info in db
      const infoRef = doc(db, 'todos', infoId)
      await updateDoc(infoRef, { completed: !currentStatus })

      // update info locally
      setTodos(prevTodos =>
        prevTodos.map(todo =>
          todo.id === infoId ? { ...todo, completed: !currentStatus } : todo
        )
      )
    } catch (e) {
      console.error("Error updating task: ", e)
    }
  }

  return (
    <main className='h-dvh bg-blue-50 overflow-y-scroll'>
      <Formik
        initialValues={initVal}
        validationSchema={formValidation}
        onSubmit={handleSubmit}
      >
        <Form className='flex justify-center'>
          <div className='w-full p-10 flex items-center gap-10'>
            <div className='w-full'>
              <Field
                name='title'
                placeholder='Enter a task...'
                className="w-full border-none outline-none rounded-md px-3 py-2  text-2xl"
              />
              <ErrorMessage
                name='title'
                component={'p'}
                className='text-red-500 text-sm'
              />
            </div>
            <button
              type='submit'
              className='p-3 rounded-md bg-white text-blue-600 text-2xl'
            >
              <FaPlus />
            </button>
          </div>
        </Form>
      </Formik>

      <div>
        <ul className='w-full'>
          {
            todos.map((todo) => (
              <li key={todo.id} className={`w-[90%] mx-auto flex justify-between p-3 m-3 text-lg border-b border-b-gray-300 rounded-lg ${todo.completed ? 'line-through bg-gray-200' : ''} `}>
                <input
                  onChange={() => check(todo.id, todo.completed)}
                  checked={todo.completed}
                  type="checkbox" />
                {todo.title}
                <button className='w-12 '>
                  <FaTrashAlt className='hover:text-red-600 hover:text-2xl transition-all' />
                </button>
              </li>
            ))
          }
        </ul>
      </div>
      <p className='text-center text-sm p-10'>You have {todos.length} tasks</p>
    </main>
  )
}

export default TodoForm