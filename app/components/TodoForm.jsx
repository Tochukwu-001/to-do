import { Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const TodoForm = () => {
  const inival ={
    title: '',
    task: ''
  }
  const formValidation = Yup.object().shape({
    title: Yup.string()
    .required('please enter a task')
  })

  const handleSubmit = (values)=>{
    console.log(values);
    
  }
  return (
    <main className='h-dvh bg-blue-50'>
        <Formik
         initialValues={inival}
         validationSchema={formValidation}
        >
            <Form>
                <Field
                 name='title'
                 placeholder='enter a task'
                />
                
            </Form>
        </Formik>
    </main>
  )
}

export default TodoForm