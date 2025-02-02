import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../redux/Rockets/RocketsSlice';

const RocketsItem = ({
  id, name, image, description, reserved,
}) => {
  const dispatch = useDispatch();
  const reserveRockets = (buttonId) => {
    dispatch(reserveRocket(buttonId));
  };

  return (
    <li className="flex bg-white shadow-lg rounded-lg p-4 items-center">
      <div className="w-2/5 flex-shrink-0">
        <img
          className="w-full h-auto rounded-lg object-cover"
          alt={name}
          src={image}
        />
      </div>
      <div className="flex-1 ml-6">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-700 mb-4">
          {reserved && <span className="text-green-500 font-semibold">Reserved</span>}
          <span className="ml-2">{description}</span>
        </p>
        <button
          onClick={() => reserveRockets(id)}
          className={`px-5 py-2 rounded-lg text-white ${reserved ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'}`}
          type="button"
        >
          {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </li>
  );
};

RocketsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default RocketsItem;
