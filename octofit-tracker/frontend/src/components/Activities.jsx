import { useEffect, useState } from 'react';
import { getApiBaseUrl } from '../utils/api';

function Activities() {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState('');
  const endpoint = '/api/activities/';

  useEffect(() => {
    async function fetchActivities() {
      try {
        const response = await fetch(`${getApiBaseUrl()}${endpoint}`);
        const data = await response.json();
        setActivities(Array.isArray(data) ? data : data.results || []);
      } catch (err) {
        setError('Unable to load activities.');
      }
    }

    fetchActivities();
  }, []);

  return (
    <div className="container py-4">
      <h2>Activities</h2>
      {error ? <p className="text-danger">{error}</p> : null}
      <ul className="list-group">
        {activities.map((activity) => (
          <li key={activity._id || activity.type} className="list-group-item">
            <strong>{activity.type}</strong> - {activity.durationMinutes} min
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Activities;
