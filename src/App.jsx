import Header from './components/Header';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import './scss/app.scss';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ServiciosPage from './pages/ServiciosPage';
import Footer from './components/Footer';
import Reservar from './pages/Reservar';

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route 
            path="/"
            element={
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <Home />
              </motion.div>
            }
          />
          <Route 
            path="/nosotros"
            element={
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <Nosotros />
              </motion.div>
            }
          />

          <Route 
            path="/servicios"
            element={
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <ServiciosPage />
              </motion.div>
            }
          />

          <Route 
            path="/reservar"
            element={
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <Reservar />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;