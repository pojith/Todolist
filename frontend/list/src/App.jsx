import { Test } from './components/test';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Practice } from './components/useeffects';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/p" element={<Practice />} />
      </Routes>
    </Router>
  );
}

export default App;
