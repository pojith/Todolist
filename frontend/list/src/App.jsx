import { Test } from './components/test';
import { BrowserRouter as Router, Routes, Route ,Link} from 'react-router-dom';
import { Practice } from './components/useeffects';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import { Menu } from './components/Menu';
import { useState } from 'react';
import { createContext } from 'react';

export const upname = createContext()



 const App = ()=> {
  const [name,change]=useState("pojh")
  return (
    <Router>
      <Link to="/h">home</Link>
      <Link to="/m">menu</Link>
      <Link to="/c">Contact</Link>
      <upname.Provider value={{name,change}}>
      <Routes>
        <Route path="/" element={<Test   />} />
        <Route path="/p" element={<Practice />} />
        <Route path="/h" element={<Home />} />
        <Route path="/m" element={<Menu />} />
        <Route path="/c" element={<Contact />} />
      </Routes>
      </upname.Provider>
    </Router>
  );
}
export default App;


