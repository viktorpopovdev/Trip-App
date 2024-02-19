import { useState, useEffect } from 'react';
import { getForecastForToday } from './services/weather';

function App() {
  const [weather, setWeather] = useState('');
  useEffect(() => {
    getForecastForToday('london').then((data) => {
      setWeather(data);
    });
  }, []);

  console.log(weather);

  return <></>;
}

export default App;
