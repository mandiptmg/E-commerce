import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './Context.jsx'
import { FilterProvider } from './Context/filterContext.jsx'
import { CartProvider } from './Context/cartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <FilterProvider>
      <CartProvider>
        <BrowserRouter>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </BrowserRouter>
      </CartProvider>
    </FilterProvider>
  </AppProvider>
)
