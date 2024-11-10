import React from 'react'
import { Routes,Route } from 'react-router'
import Create from '../Create/Create'
import Posts from '../Posts/Posts'

const MainRoutes:React.FC = () => {
  return (
      <>
      <Routes>
          {/* Static route */}

          {/* Dynamic route with user id */}
          <Route path="/" element={<Posts/>} />
          <Route path="/create" element={<Create />} />

          {/* Fallback route for unmatched paths */}
          {/* <Route path="*" element={<Home/>} /> */}
      </Routes>
      
    </>
  )
}

export default MainRoutes
