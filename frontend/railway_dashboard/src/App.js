import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter as Router
import Dashboard from './Components/Dashboard';
import TrainDetails from './Components/TrainDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route path="/train-details/:trainNumber" element={<TrainDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;