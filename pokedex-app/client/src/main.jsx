import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './HomePage.jsx'
import PokemonCard from './PokemonCard.jsx'
import { Routes, Route, BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
              <Route path="/" element={<HomePage />} />
              
              <Route path="/:gen" element={<PokemonCard />} />
            </Routes>
    </BrowserRouter>
  </StrictMode>,
)
