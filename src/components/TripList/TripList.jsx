// import { useState } from 'react';
import TripItem from '../TripItem/TripItem';
import styles from './TripList.module.css';

function TripList({ trips, setLocation, setIsOpen, setDateForCountdownTimer, setStartDate, setEndDate }) {
  console.log(trips);
  // const [selectedItem, setSelectedItem] = useState(null);

  return (
    <ul className={styles.list}>
      {trips.map((trip) => (
        <TripItem
          // onSelectedItem={setSelectedItem}
          // selectedItem={selectedItem}
          key={trip.id + trip.name + Math.random()}
          name={trip.name}
          image={trip.img}
          dateStart={trip.dateStart}
          dateEnd={trip.dateEnd}
          setLocation={setLocation}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          setIsOpen={setIsOpen}
          setDateForCountdownTimer={setDateForCountdownTimer}
        />
      ))}
    </ul>
  );
}

export default TripList;
