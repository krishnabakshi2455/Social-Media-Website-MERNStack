import React from 'react'
import { Routes,Route } from 'react-router'
import Home from '../Home/Home'

const MainRoutes:React.FC = () => {
  return (
      <>
      <Routes>
          {/* Static route */}
          <Route path="/post" element={<Home />} />

          {/* Dynamic route with user id */}
          {/* <Route path="/" element={<Home />} /> */}

          {/* Fallback route for unmatched paths */}
          {/* <Route path="*" element={<Home/>} /> */}
      </Routes>
      
    </>
  )
}

export default MainRoutes
