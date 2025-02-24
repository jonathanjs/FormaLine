
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from './component/container/Container'
import Footer from './component/footer/Footer'
import Header from './component/header/Header'
import Home from   './component/pages/Home/Home'
import Formation from   './component/pages/Formation/Formation'
import Presentiel from './component/pages/Presentiel/Presentiel';




function App() {
 

  return (
    <div className="content">

    <Router>
      <Header />
      <Routes>
        <Route path="/page/Home" element={<Home/> } />
        <Route path="/page/Formation" element={<Formation />} />
        <Route path="/page/Presetiel" element={<Presentiel />} />
      </Routes>
    </Router>
    
      <Container />
      <Footer/>


    </div>
  )
}

export default App
