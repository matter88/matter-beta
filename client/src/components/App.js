import React from 'react'
import Header from './Header.jsx'
import Main from './Main.jsx'
import { Button } from 'react-bootstrap'

const App = () => (
  <div>
    <Header />
    <Button bsStyle="success">Success</Button>
    <Main />
  </div>
)

export default App



