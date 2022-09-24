import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Login from './components/Login';
import SignUp from './components/SignUp';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './components/Dashboard';


function App() {

  

  return (
    <>
    <Router>
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/' element={<>
        <Navbar/>
        <Home/>
        <About/>
        <Gallery/>
        <Contact/>
        </>}></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
