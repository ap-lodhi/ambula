import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { Navbar } from './Componet.jsx/Navbar';
import { Home } from './Componet.jsx/Home';
import { About } from './Componet.jsx/About';
import { Contact } from './Componet.jsx/Contact';
import Footer from './Componet.jsx/Footer';

function App() {
  return (
    <>
    <Router>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
       
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
