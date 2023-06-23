import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './components/Nav.tsx'
import Listgroup from './components/Listgroup.tsx'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.tsx'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App/>
    <Header/>
    <Nav/>
    <Listgroup/>

  </React.StrictMode>,
)
