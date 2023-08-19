import {BrowserRouter as Router} from "react-router-dom"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Works from "./components/Works";

function App() {
  return (
    <Router>
      <div className="intro bg-slate-50 h-screen flex flex-col justify-between scroll-smooth font-sans">
        <Navbar/>
        <Works/>
        <Footer/>
      </div>
    </Router>
  )
}

export default App;
