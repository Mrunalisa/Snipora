
import './App.css';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Paste from './components/Paste.jsx';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import NotFound from './components/NotFound.jsx';

function App() {

  return (
    <div className="m-0 bg-[#dbcdb7] w-[100%] overflow-x-hidden">
    <BrowserRouter>
      
    <Routes>
      <Route path='/' element={<div><Navbar/><Home /></div>} />
      <Route path='/paste' element={<div><Navbar/><Paste /></div>} />
      <Route path='*' element={<div><NotFound /></div>} />
    </Routes>

    </BrowserRouter>
    </div>
  )
}

export default App
