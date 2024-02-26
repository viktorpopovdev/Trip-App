import styles from './TripItem.module.css';
import moment from 'moment';

function TripItem({
  image,
  name,
  dateStart,
  dateEnd,
  setLocation,
  setDateForCountdownTimer,
  setStartDate,
  setEndDate,
}) {
  const start = moment(dateStart, 'DD.MM.YYYY');
  const formattedStartDate = start.format('YYYY-MM-DD');
  const end = moment(dateEnd, 'DD.MM.YYYY');
  const formattedEndDate = end.format('YYYY-MM-DD');
  console.log(formattedStartDate);
  console.log(formattedEndDate);
  return (
    <div
      className={styles.card}
      onClick={() => {
        setLocation(name);
        // setIsOpen(true);
        setDateForCountdownTimer(dateStart);
        setStartDate(formattedStartDate);
        setEndDate(formattedEndDate);
      }}
    >
      <img src={image} alt={name} className={styles.picture} />
      <div className={styles.description}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.date}>
          {dateStart} - {dateEnd}
        </p>
      </div>
    </div>
  );
}

export default TripItem;
