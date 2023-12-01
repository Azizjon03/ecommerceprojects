import React from 'react'
import Home from './routes/Home'
import { Route, Routes } from 'react-router-dom'
import Products from './components/Products'


const App = () => {
  return (

    <><Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/" element={<Products />}></Route>
    </Routes></>

  )
}
export default App