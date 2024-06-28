import './App.css'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import SignIn from "./signIn"
import SignUp from "./signUp"
import Home from"./home"
import Navbar from "./navbar"

export default function App() {


  return (
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/signup" element={<SignUp/>} />
    </Routes>
    </BrowserRouter>
  )
}