import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter as Router, Routes, Route} from
'react-router-dom';
import Home from './components/pages/Home'
import Exp from './components/pages/Exp'
import Projects from './components/pages/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Exp' element={<Exp/>}/>
          <Route path='/Projects' element={<Projects/>}/>
        </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
