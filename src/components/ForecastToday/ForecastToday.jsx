import styles from './ForecastToday.module.css';
import moment from 'moment';
import convertFahrenheitToCelsius from '../../utils/convertFahrenheitToCelsius';

function ForecastToday({ weather }) {
  const temperatureCelsius = convertFahrenheitToCelsius(weather?.currentConditions?.temp);
  return (
    <div className={styles.card}>
      <h3>{moment().format('dddd')}</h3>
      <h3>{temperatureCelsius}°C</h3>
      <h3>{weather.address}</h3>
      <h3>{weather?.currentConditions?.conditions}</h3>
    </div>
  );
}

export default ForecastToday;
