import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'

import Home from './pages/Home'
import SalesDashboard from './pages/SalesDashboard'

function App(){

  return(

    <HashRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/sales-dashboard"
          element={<SalesDashboard />}
        />

      </Routes>

    </HashRouter>

  )
}

export default App


/**

import { BrowserRouter, Routes, Route,HashRouter } from 'react-router-dom'

import Home from './pages/Home'
import SalesDashboard from './pages/SalesDashboard'

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/sales-dashboard"
          element={<SalesDashboard />}
        />

      </Routes>

    </BrowserRouter>

  )
}

export default App
 **/