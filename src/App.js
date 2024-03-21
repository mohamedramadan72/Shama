import React from 'react'
import Home from './Component/Home/Home'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './Component/Layout/Layout'
import About from './Component/About/About'
import Register from './Component/Register/Register'
import Login from './Component/Login/Login'
import Condition from './Component/Condition/Condition'
import NursingStuff from './Component/NursingStuff/NursingStuff'
import Payment from './Component/Payment/Payment'


let routers = createBrowserRouter([
    {path:'/' , element:<Layout/> , children:[
        {path:'home', element:<Home/>},
        {path:'about', element:<About/>},
        {index: true , element:<Register/>},
        {path:'login', element:<Login/>},
        {path:'condition', element:<Condition/>},
        {path:'nursing', element:<NursingStuff/>},
        {path:'payment', element:<Payment/>},
    ]}
])

export default function App() {
  return <>
  <RouterProvider router={routers}/> 
  </>
}
