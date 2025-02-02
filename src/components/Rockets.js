import { useSelector } from 'react-redux';
import RocketsItem from './RocketsItem';

const Rockets = () => {
  const selectedData = useSelector((state) => state.rockets);
  const { loading, error, rocketData } = selectedData;

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {loading && <p className="text-center text-lg">Loading...</p>}
      {error && <p className="text-red-500 text-center">Error...</p>}
      {!loading && !error && rocketData.map((rocket) => (
        <RocketsItem
          key={rocket?.id}
          id={rocket?.id}
          name={rocket?.name}
          image={rocket?.image}
          description={rocket?.description}
          reserved={rocket?.reserved}
        />
      ))}
    </ul>
  );
};

export default Rockets;
