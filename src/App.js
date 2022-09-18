import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'
import {useState} from 'react';

function App() {

  const [navColor, setNavColor] = useState({
    backgroundColor: "#DE1F26",
  })

  const toggleMode = () => {
    if(navColor.backgroundColor === "#DE1F26"){
      setNavColor({
        backgroundColor : "black",
      });
    }
    else{
      setNavColor({
        backgroundColor: "#DE1F26",
      });
    }
  }

  return (
    <>
    <Navbar toggleMode={toggleMode} navColor={navColor}/>
    <Home navColor={navColor}/>
    <About/>
    </>
  );
}

export default App;
