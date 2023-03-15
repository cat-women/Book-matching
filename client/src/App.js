import React from 'react'
import { Container } from '@material-ui/core'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/navBar/NavBar'
import Home from './components/home/Home'
import Auth from './components/auth/Auth'

import makeStyles from './styles.js'

const App = () => {
  const styleClass = makeStyles()

  return (
    <BrowserRouter>
      <Container sx={{maxWidth:'70%'}} maxWidth={false} disableGutters>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/auth' exact element={<Auth/>} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
