import ForecastDay from '../ForecastDay/ForecastDay';
import styles from './ForecastWeek.module.css';

function ForecastWeek({ weatherWeek }) {
  return (
    <div>
      <h1>Week</h1>
      <ul className={styles['list-of-forecast-days']}>
        {weatherWeek?.days?.map((day) => (
          <ForecastDay key={day.datetime} day={day} />
        ))}
      </ul>
    </div>
  );
}

export default ForecastWeek;
