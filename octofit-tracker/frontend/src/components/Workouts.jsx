import { useEffect, useState } from 'react';
import { getApiBaseUrl } from '../utils/api';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState('');
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
  const apiBaseUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : 'http://localhost:8000';
  const endpoint = '/api/workouts/';

  useEffect(() => {
    async function fetchWorkouts() {
      try {
        const response = await fetch(`${apiBaseUrl}${endpoint}`);
        const data = await response.json();
        setWorkouts(Array.isArray(data) ? data : data.results || []);
      } catch (err) {
        setError('Unable to load workouts.');
      }
    }

    fetchWorkouts();
  }, []);

  return (
    <div className="container py-4">
      <h2>Workouts</h2>
      {error ? <p className="text-danger">{error}</p> : null}
      <ul className="list-group">
        {workouts.map((workout) => (
          <li key={workout._id || workout.name} className="list-group-item">
            <strong>{workout.name}</strong> - {workout.difficulty}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Workouts;
