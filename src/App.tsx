import './App.css';

import Navbar from './components/Navbar';
import AnimatedRoutes from './components/AnimatedRoutes';

import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>

        <AnimatedRoutes />

      </BrowserRouter>
    </div>
  );
}

export default App;
