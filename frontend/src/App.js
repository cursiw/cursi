import React from 'react';
import Header from './components/Header';
import TournamentList from './components/TournamentList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <TournamentList />
      </main>
    </div>
  );
}

export default App;