
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Perros from './pages/Perros'
import Gatos from './pages/Gatos'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
function App() {

  return (
    <>
      <Router>

          <section className="app">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/perros" element={<Perros/>}/>
              <Route path="/gatos" element={<Gatos/>}/>
            </Routes>
          </main>
            <Footer />
          </section>
        </Router>
      
    </>
  )
}

export default App
