import { useEffect, useState } from 'react';
import { getApiBaseUrl } from '../utils/api';

function Teams() {
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState('');
  const endpoint = '/api/teams/';

  useEffect(() => {
    async function fetchTeams() {
      try {
        const response = await fetch(`${getApiBaseUrl()}${endpoint}`);
        const data = await response.json();
        setTeams(Array.isArray(data) ? data : data.results || []);
      } catch (err) {
        setError('Unable to load teams.');
      }
    }

    fetchTeams();
  }, []);

  return (
    <div className="container py-4">
      <h2>Teams</h2>
      {error ? <p className="text-danger">{error}</p> : null}
      <ul className="list-group">
        {teams.map((team) => (
          <li key={team._id || team.name} className="list-group-item">
            <strong>{team.name}</strong> - {team.focus}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Teams;
