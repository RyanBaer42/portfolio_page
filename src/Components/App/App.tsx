import './App.scss';
import { Routes, Route } from 'react-router';

import Nav from '../Nav/Nav';
import Dashboard from '../Dashboard/Dashboard';
import Footer from '../Footer/Footer';
import ProjectPage from '../ProjectPage/ProjectPage';
import SkillsPage from '../SkillsPage/SkillsPage';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
      <Route
        path="/"
        element={
          <Dashboard/>
        }
        />
      <Route
        path='/projects'
        element={
          <ProjectPage />
        }
      />
      <Route 
        path='/skills'
        element={
          <SkillsPage />
        }
      />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
