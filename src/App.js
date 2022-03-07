import './App.css';
import Nav from './Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Home';
import Events from './Events';
import About from './About';
function App() {
  return (
    <div className="App">

      <Router>
        
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/event" element={<Events/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
