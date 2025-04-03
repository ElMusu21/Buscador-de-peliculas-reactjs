import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MoviesApp } from './MoviesApp'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MoviesApp/>
  </StrictMode>,
)
