import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Login from './components/Login/Login.jsx'
import User from './components/User/User.jsx'
import GitHub, { githubInfoLoader }  from './components/GitHub/GitHub.jsx'

// const router = createBrowserRouter([{
//   path:"/",
//   element: <Layout/>,
//   children:[
//   {
//     path:  "",
//     element:<Home/>
//   },
//   {
//     path:"about",
//     element:<About />
//   },
//   {
//     path:'contact',
//     element:<Contact/>
//   },
//   {
//     path:'login',
//     element:<Login/>
//   },
// ]

// }])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='login' element={<Login />} />
       <Route path='user/:userid' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<GitHub />}
       /> 
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    <App />
  </StrictMode>,
)
