import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AuthProvider from '../components/AuthProvider'

 


const layout = ({children}) => {
  return (
    <main>
      <AuthProvider>
        <Navbar/>
        {children}
        <Footer/>
        </AuthProvider>
    </main>
  )
}

export default layout