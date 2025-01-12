import './App.css';

import Intro from './pages/intro/Intro';
import Navbar from './components/Navbar'
import About from './pages/about/About';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route path='/' element={<Intro/>} />
          <Route path='/about' element={<About/>} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
