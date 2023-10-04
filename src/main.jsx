import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Articulo } from './Articulo'
import { Banner } from './Banner'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <main className='main-container'>
    <Articulo />
    <Banner />
  </main>
)
