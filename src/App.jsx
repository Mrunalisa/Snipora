<<<<<<< HEAD
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Paste from './components/Paste'
import ViewPaste from './components/ViewPaste'
const router=createBrowserRouter(
  [
    {
      path: '/',
      element: 
      <div>
        <Navbar />
        <Home />
      </div>,
    },
    {
      path: '/pastes',
      element: 
      <div>
        <Navbar/>
        <Paste/>
      </div>,
    },
     {
      path: '/pastes/:id',
      element: 
      <div>
         <Navbar/>
        <ViewPaste/>
      </div>,
    },
  ]
)
=======

import './App.css';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Paste from './components/Paste.jsx';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import NotFound from './components/NotFound.jsx';
>>>>>>> d85bbff2dec2daad079d3defac003ca6e488db1b

function App() {

  return (
<<<<<<< HEAD
   <div className='text-[#5d2815]'>
    <RouterProvider router={router} />

   </div>
=======
    <div className="m-0 bg-[#dbcdb7] w-[100%] overflow-x-hidden">
    <BrowserRouter>
      
    <Routes>
      <Route path='/' element={<div><Navbar/><Home /></div>} />
      <Route path='/paste' element={<div><Navbar/><Paste /></div>} />
      <Route path='*' element={<div><NotFound /></div>} />
    </Routes>

    </BrowserRouter>
    </div>
>>>>>>> d85bbff2dec2daad079d3defac003ca6e488db1b
  )
}

export default App
