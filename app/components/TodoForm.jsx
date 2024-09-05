"use client"
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import * as Yup from 'yup'
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase';
import { FaTrashAlt } from "react-icons/fa";
import { useToast } from '@/components/ui/use-toast';
import { LuLoader2 } from "react-icons/lu";

const TodoForm = () => {

  const { toast } = useToast();

  const [todos, setTodos] = useState([])

  const [processing, setProcessing] = useState(false)

  const [editingTask, setEditingTask] = useState(null)

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
    try { //runs when the request is successful
      setProcessing(true)
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

      toast({
        description: "Your task has been added",
      })
      resetForm()

    } catch (error) { // runs when the request is unsucessful
      console.error("Error adding task: ", error)
    }
    finally {
      setProcessing(false)
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

  const handleDelete = async (infoId) => {
    if (!confirm("Confirm delete")) {
      return
    }

    try {
      await deleteDoc(doc(db, "todos", infoId))
      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== infoId))

      toast({
        description: "Your task has been deleted",
      })
    } catch (error) {
      console.error("Error deleting task: ", error)
    }
  }

  const handleUpdateTask = async (infoId) => {
    try {
      const taskRef = doc(db, 'todos', infoId)
      await updateDoc(taskRef, { title: editingTask.title })

      setTodos(prevTodos =>
        prevTodos.map(todo =>
          todo.id === infoId ? { ...todo, title: editingTask.title } : todo
        )
      )

      setEditingTask(null)

    } catch (error) {
      console.error("Error updating task: ", error)
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
            <div className='w-full flex flex-col h-12'>
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
              disabled={processing}
              className='p-3 rounded-md bg-white text-blue-600 text-2xl'
            >
              {
                processing ? <LuLoader2 className='animate-spin text-2xl' /> : <FaPlus />
              }
            </button>
          </div>
        </Form>
      </Formik>

      <div>
        <ul className='w-full'>
          {
            todos.map((todo) => (
              <li key={todo.id} className={`w-[90%] mx-auto flex justify-between p-3 m-3 text-lg border-b border-b-gray-300 rounded-lg  `}>
                {console.log({ todo })}

                <input
                  onChange={() => check(todo.id, todo.completed)}
                  checked={todo.completed}
                  type="checkbox"
                />
                {
                  editingTask?.id === todo.id ? (
                    <input type="text"
                    className='p-2 rounded-lg outline-none border-blue-300'
                      value={editingTask.title}
                      onChange={(e) => setEditingTask({ ...editingTask, title: e.target.value })}
                    />
                  ) : (
                    <span className={`${todo.completed ? 'line-through  text-gray-500' : ''}`}>
                      {todo.title}
                    </span>
                  )
                }
                <div className='flex items-center gap-2'>
                  {
                    editingTask?.id === todo.id ? (
                      <button
                        onClick={() => handleUpdateTask(todo.id)}
                      >
                        save
                      </button>
                    ) : (
                      <button
                        onClick={() => setEditingTask(todo)}
                      >
                        edit
                      </button>
                    )
                  }
                  <button
                    onClick={() => handleDelete(todo.id)}
                    className='w-12 '>
                    <FaTrashAlt className='hover:text-red-600 hover:text-2xl transition-all' />
                  </button>
                </div>
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