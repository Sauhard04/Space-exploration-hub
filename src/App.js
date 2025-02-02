import React, { useEffect } from 'react'; // Import useEffect from React
import {
  HashRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import { getDataFromServer } from './redux/Rockets/RocketsSlice';
import './index.css';
import Navbar from './components/Navbar';
import { Dragons } from './components/Dragons';

import Astronauts from './components/astronauts';
import SpaceTech from './components/SpaceTech';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataFromServer());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/dragons" element={<Dragons />} />
          <Route path="/astronauts" element={<Astronauts />} />
          <Route path="/space-tech" element={<SpaceTech />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
