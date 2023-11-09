import React from 'react'
import ReactDOM from 'react-dom/client'
import {PokedexApp} from './PokedexApp.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokedexApp />
  </React.StrictMode>,
)
