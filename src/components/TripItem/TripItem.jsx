import styles from './TripItem.module.css';

function TripItem({ image, name, dateStart, dateEnd, setLocation, setIsOpen, setDateForCountdownTimer }) {
  return (
    <div
      className={styles.card}
      onClick={() => {
        setLocation(name);
        setIsOpen(true);
        setDateForCountdownTimer(dateStart);
      }}
    >
      <img src={image} alt={name} height={200} width={300} />
      <h3>{name}</h3>
      <p>
        {dateStart} - {dateEnd}
      </p>
    </div>
  );
}

export default TripItem;
