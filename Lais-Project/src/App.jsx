import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Parceiros from './components/Parceiros'
import Transparencia from './components/Transparencia'
import Modulos from './components/Modulos'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Modulo from './components/Modulo'



function App() {

  return (
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modulos" element={< Modulos/>}/>
        <Route path="/modulo/:id" element={< Modulo />}/>
        <Route path="/parceiros" element={< Parceiros />}/>
        <Route path="/transparencia" element={< Transparencia/>}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
