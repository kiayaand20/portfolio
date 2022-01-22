import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './screens/Home/Home'
import Contact from './screens/Contact/Contact'
import About from './screens/About/About'
import Projects from './screens/Projects/Projects'
import Resume from './screens/Resume/Resume'


function App() {
  return (
    <div className='body'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
