import { Route, Routes } from 'react-router-dom';

import NavBar from './components/navbar/NavBar';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
