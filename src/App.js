import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Explorer from './pages/Explorer';
import Quiz from './pages/Quiz';
import CaseStudies from './pages/CaseStudies';
import Timeline from './pages/Timeline';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/explorer' element={<Explorer />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/case-studies' element={<CaseStudies />} />
          <Route path='/timeline' element={<Timeline />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
