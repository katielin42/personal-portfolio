import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter as Router, Routes, Route} from
'react-router-dom';
import Home from './components/pages/Home'
import Exp from './components/pages/Exp'
import Projects from './components/pages/Projects'

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
    </Router>
    </>
  );
}

export default App;
