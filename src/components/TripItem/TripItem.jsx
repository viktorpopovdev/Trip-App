import styles from './TripItem.module.css';

function TripItem({ image, name, dateStart, dateEnd }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} height={200} width={300} />
      <h3>{name}</h3>
      <p>
        {dateStart} - {dateEnd}
      </p>
    </div>
  );
}

export default TripItem;
