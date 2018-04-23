// @flow
import React, { Fragment } from 'react'
import { Router } from 'react-static'
import { hot } from 'react-hot-loader'
/* eslint-disable import/no-unresolved, import/extensions */
// $FlowFixMe (auto generated from `./static.config.js`)
import Routes from 'react-static-routes'
/* eslint-enable import/no-unresolved, import/extensions */
import Footer from './modules/Footer'
import NavBar from './modules/NavBar'

const App = () => (
  <Router>
    <Fragment>
      <main role="main">
        <Routes />
      </main>
      <NavBar />
      <Footer />
    </Fragment>
  </Router>
)

export default hot(module)(App)