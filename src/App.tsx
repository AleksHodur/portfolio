import './App.css';

import Intro from './pages/Intro';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
    </div>
  );
}

export default App;
