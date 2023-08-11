import React from 'react'
import './App.css'
import 'rsuite/dist/rsuite.min.css'
import 'rsuite-table/dist/css/rsuite-table.css'
import RoutesItem from './routers/RoutesItem'
import Loader from './components/LoaderBlock/LoaderBlock'

function App() {
  return (
    <div className="App">
      <RoutesItem />
    </div>
  )
}

export default App
