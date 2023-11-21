import React from 'react'
import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home"

import CreateComp from "./pages/CreateComp"


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/companies/create' element={<CreateComp />} />      
    </Routes>
  )
}

export default App