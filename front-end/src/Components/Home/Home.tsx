import React from 'react'
import Navbar from '../Navbar/NavBar'
import MainRoutes from '../Main-Routes/MainRoutes'

const Home: React.FC = () => {
  return (
    <>
      <div className='flex'>
        <div className=''>
          <Navbar />
        </div>
        <MainRoutes />
      </div>
    </>
  )
}

export default Home
