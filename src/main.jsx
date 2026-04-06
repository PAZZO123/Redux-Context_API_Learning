import { configureStore } from '@reduxjs/toolkit'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import userReducer from "./reducers/user"
import themeReducer from "./reducers/theme"

const store=configureStore({
  reducer:{
    user:userReducer,
    theme:themeReducer
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
<Provider store={store}>
  <BrowserRouter>
   <App />
</BrowserRouter>
</Provider>
  </StrictMode>,
)
