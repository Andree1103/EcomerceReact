import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Login from './pages/Login'
import Purchase from './pages/Purchase'
import AppNavbar from './components/AppNavbar'
import LoadingScreen from './components/LoadingScreen'
import { useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'

function App() {
  const isLoading = useSelector(state =>state.isLoading)

  return (
    <HashRouter>
      <AppNavbar/>
      {isLoading && <LoadingScreen/>}
      <Container className='my-5'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/:id' element={<ProductDetail/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/purchase' element={<Purchase/>}/>
      </Routes>
      </Container>
    </HashRouter>
  )
}

export default App
