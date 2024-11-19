import React from 'react'
import Navbar from '../Navbar/NavBar'
import MainRoutes from '../Main-Routes/MainRoutes'
import useCanvasCursor from './hooks/useCanvasCursor '

const Home: React.FC = () => {
  useCanvasCursor();
  return (
    <>
      <canvas
        className="pointer-events-none fixed inset-0"
        id="canvas"
      />
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
