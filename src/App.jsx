import { useState, useEffect } from 'react';
import { getForecastForToday, getForecastForPeriodOfTime } from './services/weather';
import Header from './components/Header/Header';
import TripList from './components/TripList/TripList';
import ForecastToday from './components/ForecastToday/ForecastToday';
import ForecastWeek from './components/ForecastWeek/ForecastWeek';
import styles from './App.module.css';

function App() {
  const [weather, setWeather] = useState('');
  const [weatherWeek, setWeatherWeek] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [location, setLocation] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [dateForCountdownTimer, setDateForCountdownTimer] = useState('');
  const trips = [
    {
      img: 'https://assets.editorial.aetnd.com/uploads/2019/03/topic-london-gettyimages-760251843-feature.jpg',
      name: 'London',
      dateStart: '20.02.2024',
      dateEnd: '27.02.2024',
    },
    {
      img: 'https://media.cntraveller.com/photos/653783ab9da3a22eb97452f9/4:3/w_4608,h_3456,c_limit/Cheapest_time_to_go_to_Paris_October23_Getty_Images.jpg',
      name: 'Paris',
      dateStart: '25.04.2027',
      dateEnd: '27.04.2027',
    },
    {
      img: 'https://comeonbarcelona.com/wp-content/uploads/2020/06/IMG_7766-21.jpg',
      name: 'Barcelona',
      dateStart: '27.02.2024',
      dateEnd: '01.03.2024',
    },
  ];

  useEffect(() => {
    getForecastForToday(location).then((data) => {
      setWeather(data);
    });
  }, [location]);

  useEffect(() => {
    getForecastForPeriodOfTime(location, startDate, endDate).then((data) => {
      setWeatherWeek(data);
    });
  }, [location, startDate, endDate]);

  console.log(weather);
  console.log(weatherWeek);
  console.log(startDate);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <TripList
            trips={trips}
            setLocation={setLocation}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            setIsOpen={setIsOpen}
            setDateForCountdownTimer={setDateForCountdownTimer}
          />
          <ForecastWeek weatherWeek={weatherWeek} />
        </div>
        {isOpen && <ForecastToday weather={weather} dateForCountdownTimer={dateForCountdownTimer} />}
      </main>
    </>
  );
}

export default App;
