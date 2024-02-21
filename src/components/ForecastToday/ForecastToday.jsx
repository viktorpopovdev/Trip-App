import styles from './ForecastToday.module.css';
import moment from 'moment';
import CountdownTimer from '../CountdownTimer/CountdownTimer';
import getWeatherIcon from '../../utils/getWeatherIcon';

function ForecastToday({ weather, dateForCountdownTimer }) {
  const temperature = Math.round(weather?.currentConditions?.temp);
  const weatherIcon = getWeatherIcon(weather?.currentConditions?.icon);
  return (
    <div className={styles.card}>
      <h3>{moment().format('dddd')}</h3>
      <img src={weatherIcon} height={35} />
      <h3>{temperature}°C</h3>
      <h3>{weather.address}</h3>
      <CountdownTimer startDate={dateForCountdownTimer} />
    </div>
  );
}

export default ForecastToday;
