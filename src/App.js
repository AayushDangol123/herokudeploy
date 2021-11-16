import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import Home from "./component/home/Home";
import Login from "./component/login/Login"
import Contact from "./component/contact/Contact";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path = "/" element = { <Home />} />
        <Route path="/Contact" element = { <Contact />} />
        <Route path="/Login" element = { <Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;