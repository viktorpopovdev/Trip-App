import styles from './ForecastToday.module.css';
import moment from 'moment';
import CountdownTimer from '../CountdownTimer/CountdownTimer';
import getWeatherIcon from '../../utils/getWeatherIcon';

function ForecastToday({ weather, dateForCountdownTimer }) {
  const temperature = Math.round(weather?.currentConditions?.temp);
  const weatherIcon = getWeatherIcon(weather?.currentConditions?.icon);
  return (
    <div className={styles.card}>
      <h3 className={styles.nameOfDay}>{moment().format('dddd')}</h3>
      <div className={styles.weather}>
        <img src={weatherIcon} height={35} />
        <p className={styles.temperature}>{temperature}°C</p>
      </div>
      <p className={styles.address}>{weather.address}</p>
      <CountdownTimer startDate={dateForCountdownTimer} />
    </div>
  );
}

export default ForecastToday;
