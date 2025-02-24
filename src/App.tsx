
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from './component/container/Container';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Home from   './component/pages/Home/Home';
import Formation from   './component/pages/Formation/Formation';
import Presentiel from './component/pages/Presentiel/Presentiel';
import Contact from './component/pages/Contact/Contact';
import Register from './component/pages/Register/Register';




function App() {
 

  return (
    <div className="content">

    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/Formation" element={<Formation />} />
        <Route path="/Presentiel" element={<Presentiel />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
    
      <Container />
      <Footer/>


    </div>
  )
}

export default App
