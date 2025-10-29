import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import './index.css'
import App from './App.jsx'
import { store } from './store.js'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast';
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store}>
     <App />
     <Toaster />
    </Provider>
  </StrictMode>,
=======
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
    <App />
>>>>>>> d85bbff2dec2daad079d3defac003ca6e488db1b
)
