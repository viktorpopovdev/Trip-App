import moment from 'moment';
import getWeatherIcon from '../../utils/getWeatherIcon';

function ForecastDay({ day }) {
  return (
    <div>
      <h3>{moment(day.datetime).format('dddd')}</h3>
      <img src={getWeatherIcon(day.icon)} height={35} />
      <h3>
        {Math.round(day.tempmax)}°C / {Math.round(day.tempmin)}°C
      </h3>
    </div>
  );
}
export default ForecastDay;
