
import Home from "../pages/home"
import Login from '../pages/login'
import Startup from "../pages/startup"

import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router"

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Navigate to="/login" replace/>}/>
      <Route path='/login' element={<Login/>}/>
     <Route path='/home' element={<Home/>}/>
     <Route path='/startup' element={<Startup/>}/>
    
      
    </Routes>
   </Router>
  )
}

export default App
