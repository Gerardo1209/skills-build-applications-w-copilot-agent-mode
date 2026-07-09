import { useEffect, useState } from 'react';
import { getApiBaseUrl } from '../utils/api';

function Teams() {
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState('');
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
  const apiBaseUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : 'http://localhost:8000';
  const endpoint = '/api/teams/';

  useEffect(() => {
    async function fetchTeams() {
      try {
        const response = await fetch(`${apiBaseUrl}${endpoint}`);
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
