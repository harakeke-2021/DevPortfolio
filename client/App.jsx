import React from 'react'
import { Route } from 'react-router-dom'

import Explore from './components/Explore'
import Nav from './components/Nav'
import SearchBar from './components/SearchBar'
import Banner from './components/Banner'
import Template from './components/templates/Template'
import TemplateProfilePage from './components/templates/TemplateProfilePage'

const App = () => {
  return (
    <>
      <Route exact path='/' component={Nav} />
      <Route exact path='/' component={Banner} />
      <Route exact path='/' component={SearchBar} />
      <Route exact path='/' component={Explore} />
      <Route exact path='/css' component={TemplateProfilePage} />

    </>
  )
}

export default App
