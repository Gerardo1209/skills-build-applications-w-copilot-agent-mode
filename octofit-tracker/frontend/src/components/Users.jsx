import { useEffect, useState } from 'react';
import { getApiBaseUrl } from '../utils/api';

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const endpoint = '/api/users/';

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(`${getApiBaseUrl()}${endpoint}`);
        const data = await response.json();
        setUsers(Array.isArray(data) ? data : data.results || []);
      } catch (err) {
        setError('Unable to load users.');
      }
    }

    fetchUsers();
  }, []);

  return (
    <div className="container py-4">
      <h2>Users</h2>
      {error ? <p className="text-danger">{error}</p> : null}
      <ul className="list-group">
        {users.map((user) => (
          <li key={user._id || user.email} className="list-group-item">
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
