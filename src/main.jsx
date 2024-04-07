import React from 'react'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import './style.css'



ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Canvas shadows>
      <Experience />
    </Canvas>
  </React.StrictMode>,
)
