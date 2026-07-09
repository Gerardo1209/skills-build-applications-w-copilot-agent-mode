import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function Home() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <h1 className="card-title">OctoFit Tracker</h1>
              <p className="card-text">
                A modern multi-tier application for tracking workouts, teams, and progress.
              </p>
              <p className="text-muted small">
                Set VITE_CODESPACE_NAME in .env.local to use the Codespaces API URL.
              </p>
              <nav className="d-flex flex-wrap gap-2">
                <Link className="btn btn-outline-primary" to="/users">Users</Link>
                <Link className="btn btn-outline-primary" to="/teams">Teams</Link>
                <Link className="btn btn-outline-primary" to="/activities">Activities</Link>
                <Link className="btn btn-outline-primary" to="/leaderboard">Leaderboard</Link>
                <Link className="btn btn-outline-primary" to="/workouts">Workouts</Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
