import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router';
import Nav from '../Nav/Nav';
import Dashboard from '../Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
      <Route
          path="/"
          element={
            <Dashboard
             />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
