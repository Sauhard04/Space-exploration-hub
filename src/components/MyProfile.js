import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const { rocketData } = useSelector((state) => state.rockets);
  const filterRockets = rocketData.filter((rocket) => rocket.reserved);
  const missionData = useSelector((state) => state.missions.missions);
  const filterMissions = missionData.filter((mission) => mission.reserved);
  const dragonData = useSelector((state) => state.dragons.dragons);
  const filterDragons = dragonData.filter((dragon) => dragon.reserved);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-[100px] mx-4 md:mx-10 text-white">
      <div className="mission-card bg-opacity-45 bg-black rounded-lg shadow-lg hover:bg-opacity-60 transition">
        <h2 className="text-xl font-bold mb-4">My Missions</h2>
        <ul className="profile-card border border-gray-800 rounded-lg p-4">
          {filterMissions.length > 0 ? (
            filterMissions.map((mission) => (
              <li key={mission.mission_id} className="border-b border-gray-600 py-2 hover:bg-gray-600 transition">{mission.mission_name}</li>
            ))
          ) : (
            <li>No reserved missions</li>
          )}
        </ul>
      </div>
      <div className="rocket-card bg-opacity-45 bg-black rounded-lg shadow-lg hover:bg-opacity-60 transition">
        <h2 className="text-xl font-bold mb-4">My Rockets</h2>
        <ul className="profile-card border border-gray-800 rounded-lg p-4">
          {filterRockets.length > 0 ? (
            filterRockets.map((rocket) => (
              <li key={rocket.id} className="border-b border-gray-600 py-2 hover:bg-gray-600 transition">{rocket.name}</li>
            ))
          ) : (
            <li>No reserved rockets</li>
          )}
        </ul>
      </div>
      <div className="dragon-card bg-opacity-45 bg-black rounded-lg shadow-lg hover:bg-opacity-60 transition">
        <h2 className="text-xl font-bold mb-4">My Dragons</h2>
        <ul className="profile-card border border-gray-800 rounded-lg p-4">
          {filterDragons.length > 0 ? (
            filterDragons.map((dragon) => (
              <li key={dragon.id} className="border-b border-gray-600 py-2 hover:bg-gray-600 transition">{dragon.name}</li>
            ))
          ) : (
            <li>No reserved dragons</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
