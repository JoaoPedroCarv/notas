import { Routes, Route,  } from 'react-router-dom'


import Login from '../pages/login'
import Conta from '../pages/conta'
import ListaNotas from '../pages/notas'
import CriarNota from '../pages/novaNota'
import DetalhesNota from '../pages/detalesNota'

import Private from './private'

function RoutesApp(){
  return(
   
    
    <Routes>
      
      <Route path="/" element={ <Login/> } />
      <Route path='/registrar' element={<Conta/>} />
      <Route path='/verNotas' element={<Private><ListaNotas/></Private>}/>
      <Route path='/novaNota' element={<Private><CriarNota/></Private>}/>
      <Route path='/detalhes/:id' element={<Private><DetalhesNota/></Private>}/>
      

    </Routes>
  
  )
}

export default RoutesApp;