import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

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
              <a className="btn btn-primary" href="https://vite.dev/guide/" target="_blank" rel="noreferrer">
                Learn more
              </a>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
