// import { useState } from 'react';
import TripItem from '../TripItem/TripItem';
import styles from './TripList.module.css';

function TripList({ trips, setLocation, setIsOpen, setDateForCountdownTimer, setStartDate, setEndDate, searchTerm }) {
  console.log(trips);
  // const [selectedItem, setSelectedItem] = useState(null);
  const filteredTravels = trips.filter((travel) => travel.name.toLowerCase().includes(searchTerm.toLowerCase()));
  console.log(filteredTravels);
  return (
    <ul className={styles.list}>
      {filteredTravels ? (
        filteredTravels.map((trip) => (
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
        ))
      ) : (
        <p>Nothing not found.</p>
      )}
    </ul>
  );
}

export default TripList;
