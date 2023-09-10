import { Routes, Route } from 'react-router-dom'

import Login from '../pages/login'
import Conta from '../pages/conta'

import Private from './private'

function RoutesApp(){
  return(
    <Routes>
      <Route path="/" element={ <Login/> } />
      <Route path='/registrar' element={<Conta/>} />

    </Routes>
  )
}

export default RoutesApp;