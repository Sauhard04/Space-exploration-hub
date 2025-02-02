import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { fetchMissions } from '../redux/missions/missionSlice';
import Mission from './Mission';

function Missions() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const status = useSelector((state) => state.missions.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMissions());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div className="text-center text-white">Loading...</div>;
  }

  if (status === 'succeeded') {
    return (
      <div className="overflow-x-auto bg-opacity-50 bg-black rounded-lg shadow-lg p-4">
        <table className="min-w-full border-collapse text-white">
          <thead className="bg-gray-700">
            <tr>
              <th className="border px-2 sm:px-4 py-2 text-xs sm:text-sm text-left hover:bg-gray-600">Mission</th>
              <th className="border px-2 sm:px-4 py-2 text-xs sm:text-sm text-left hover:bg-gray-600">Description</th>
              <th className="border px-2 sm:px-4 py-2 text-xs sm:text-sm text-left hover:bg-gray-600">Status</th>
              <th className="border px-2 sm:px-4 py-2 text-xs sm:text-sm text-left hover:bg-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {missions.map((mission) => (
              <Mission
                key={nanoid()}
                id={mission.mission_id}
                mission={mission.mission_name}
                description={mission.description}
                reserved={mission.reserved}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (status === 'failed') {
    return <div className="text-center text-red-500">Error loading missions.</div>;
  }

  return null;
}

export default Missions;
