import styles from './TripItem.module.css';
import moment from 'moment';

function TripItem({
  image,
  name,
  dateStart,
  dateEnd,
  setLocation,
  setIsOpen,
  setDateForCountdownTimer,
  setStartDate,
  setEndDate,
  // onSelectedItem,
  // selectedItem,
}) {
  const start = moment(dateStart, 'DD.MM.YYYY');
  const formattedStartDate = start.format('YYYY-MM-DD');
  const end = moment(dateEnd, 'DD.MM.YYYY');
  const formattedEndDate = end.format('YYYY-MM-DD');
  console.log(formattedStartDate);
  console.log(formattedEndDate);
  // const handleItemClick = (tripName) => {
  //   console.log(tripName);
  //   onSelectedItem(tripName);
  // };
  return (
    //${selectedItem && styles.selected}
    <div
      className={styles.card}
      onClick={() => {
        setLocation(name);
        setIsOpen(true);
        setDateForCountdownTimer(dateStart);
        setStartDate(formattedStartDate);
        setEndDate(formattedEndDate);
        // handleItemClick(name);
      }}
    >
      <img src={image} alt={name} height={150} width={250} />
      <h3>{name}</h3>
      <p>
        {dateStart} - {dateEnd}
      </p>
    </div>
  );
}

export default TripItem;
