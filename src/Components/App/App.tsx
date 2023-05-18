import './App.scss';
import { Routes, Route } from 'react-router';

import Nav from '../Nav/Nav';
import Dashboard from '../Dashboard/Dashboard';
import Footer from '../Footer/Footer';

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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
