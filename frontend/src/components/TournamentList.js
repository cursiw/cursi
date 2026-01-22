import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TournamentList = () => {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/tournaments')
      .then(response => setTournaments(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="p-4 font-rajdhani">
      <h2 className="text-xl font-bold mb-4">Tournaments</h2>
      <ul>
        {tournaments.map(tournament => (
          <li key={tournament.id} className="mb-2 p-2 border rounded">
            {tournament.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TournamentList;