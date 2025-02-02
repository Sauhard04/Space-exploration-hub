import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { join, leave } from '../redux/missions/missionSlice';

const Mission = (props) => {
  const {
    mission, description, id, reserved,
  } = props;
  const dispatch = useDispatch();

  const missionJoin = (id) => {
    dispatch(join(id));
  };

  const missionLeave = (id) => {
    dispatch(leave(id));
  };

  return (
    <tr>
      <td className="px-4 py-2">{mission}</td>
      <td className="px-4 py-2">{description}</td>
      <td className="px-4 py-2">
        <span
          className={`inline-block text-white rounded-md px-2 py-1 ${
            reserved ? 'bg-teal-600' : 'bg-gray-600'
          }`}
        >
          {reserved ? 'Active Member' : 'Not a Member'}
        </span>
      </td>
      <td className="px-4 py-2">
        {reserved ? (
          <button
            type="button"
            onClick={() => missionLeave(id)}
            className="border border-red-500 text-red-500 bg-transparent rounded-md px-3 py-1 hover:bg-red-500 hover:text-white transition"
          >
            Leave Mission
          </button>
        ) : (
          <button
            type="button"
            onClick={() => missionJoin(id)}
            className="border border-black text-white bg-transparent rounded-md px-3 py-1 hover:bg-gray-300 transition"
          >
            Join Mission
          </button>
        )}
      </td>
    </tr>
  );
};

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  mission: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
