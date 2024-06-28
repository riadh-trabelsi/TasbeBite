import './App.css'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import SignIn from "./signIn"
import SignUp from "./signUp"
import Home from"./home"
import Navbar from "./navbar"
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from './redux/userSlice';


export default function App() {
  const dispatch = useDispatch()
useEffect (() =>{
  const token = localStorage.getItem('token')
  dispatch(getUser(token))
},[])

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