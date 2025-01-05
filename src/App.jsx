import Header from './components/Header';
import Home from './pages/Home';
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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
