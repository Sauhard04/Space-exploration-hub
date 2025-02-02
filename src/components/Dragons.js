import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDragons, reserveDragon, cancelReservation } from '../redux/dragons/dragonsSlice';
import logo from '../assets/logo.png';

const Navbar = () => (
  <header className="bg-white shadow">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} className="h-10 w-10" alt="Space Travelers Hub logo" />
        <h1 className="text-xl font-bold ml-2">Space Travelers Hub</h1>
      </div>
      <nav>
        <ul className="flex space-x-6 list-none">
          {['/', '/missions', '/myprofile', '/dragons'].map((path) => (
            <li key={path} className="relative flex items-center group">
              <NavLink
                to={path}
                className={({ isActive }) => `inline-block ${isActive ? 'font-semibold' : ''} text-blue-600 hover:text-blue-800 hover:underline`}
              >
                {path === '/' ? 'Rockets' : path.charAt(1).toUpperCase() + path.slice(2)}
              </NavLink>
              <span className="ml-2 h-6 border-l-2 border-transparent transition-all duration-300 group-hover:border-blue-600" />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

const Dragons = () => {
  const dispatch = useDispatch();
  const { dragons, status, error } = useSelector((state) => state.dragons);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchDragons());
    }
  }, [status, dispatch]);

  const handleReserve = (id) => {
    dispatch(reserveDragon(id));
  };

  const handleCancel = (id) => {
    dispatch(cancelReservation(id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Dragons</h2>
      {status === 'loading' && <p className="text-center">Loading...</p>}
      {status === 'failed' && (
        <p className="text-center text-red-500">
          Error:
          {error}
        </p>
      )}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {dragons.map((dragon) => (
          <li key={dragon.id} className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">{dragon.name}</h3>
            <p className="text-gray-700 mb-4">
              Type:
              {dragon.type}
            </p>
            <img
              src={dragon.flickr_images[0]}
              alt={dragon.name}
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            {dragon.reserved ? (
              <button
                type="button"
                onClick={() => handleCancel(dragon.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
              >
                Cancel Reservation
              </button>
            ) : (
              <button
                type="button"
                onClick={() => handleReserve(dragon.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Reserve Dragon
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Navbar, Dragons };
