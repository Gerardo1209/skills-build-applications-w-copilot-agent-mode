import { useEffect, useState } from 'react';
import { getApiBaseUrl } from '../utils/api';

function Leaderboard() {
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState('');
  const endpoint = '/api/leaderboard/';

  useEffect(() => {
    async function fetchLeaderboard() {
      try {
        const response = await fetch(`${getApiBaseUrl()}${endpoint}`);
        const data = await response.json();
        setEntries(Array.isArray(data) ? data : data.results || []);
      } catch (err) {
        setError('Unable to load leaderboard.');
      }
    }

    fetchLeaderboard();
  }, []);

  return (
    <div className="container py-4">
      <h2>Leaderboard</h2>
      {error ? <p className="text-danger">{error}</p> : null}
      <ul className="list-group">
        {entries.map((entry) => (
          <li key={entry._id || entry.rank} className="list-group-item">
            <strong>Rank {entry.rank}</strong> - Score {entry.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
