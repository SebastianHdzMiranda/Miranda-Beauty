import Header from './components/Header';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import './scss/app.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route 
            path="/"
            element={<Home />}
          />
          <Route 
            path="/nosotros"
            element={<Nosotros />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
