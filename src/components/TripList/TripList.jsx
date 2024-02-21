import TripItem from '../TripItem/TripItem';
import styles from './TripList.module.css';

function TripList({ trips, setLocation }) {
  console.log(trips);
  return (
    <ul className={styles.list}>
      {trips.map((trip) => (
        <TripItem
          key={trip.name}
          name={trip.name}
          image={trip.img}
          dateStart={trip.dateStart}
          dateEnd={trip.dateEnd}
          setLocation={setLocation}
        />
      ))}
    </ul>
  );
}

export default TripList;
