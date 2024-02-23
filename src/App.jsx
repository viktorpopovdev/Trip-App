import { useState, useEffect, useRef } from 'react';
import { getForecastForToday, getForecastForPeriodOfTime } from './services/getWeather';
import Header from './components/Header/Header';
import TripList from './components/TripList/TripList';
import ForecastToday from './components/ForecastToday/ForecastToday';
import ForecastWeek from './components/ForecastWeek/ForecastWeek';
import AddTripButton from './components/AddTripButton/AddTripButton';
import styles from './App.module.css';
import Overlays from './components/AddTripModal/Overlays.jsx/Overlays';
import SearchBar from './components/SearchBar/SearchBar';
// import AddTripModal from './components/AddTripModal/AddTripModal';

function App() {
  const tripsList = [
    {
      id: 1,
      img: 'https://assets.editorial.aetnd.com/uploads/2019/03/topic-london-gettyimages-760251843-feature.jpg',
      name: 'London',
      dateStart: '20.02.2024',
      dateEnd: '27.02.2024',
    },
    {
      id: 2,
      img: 'https://media.cntraveller.com/photos/653783ab9da3a22eb97452f9/4:3/w_4608,h_3456,c_limit/Cheapest_time_to_go_to_Paris_October23_Getty_Images.jpg',
      name: 'Paris',
      dateStart: '25.04.2027',
      dateEnd: '27.04.2027',
    },
    {
      id: 3,
      img: 'https://comeonbarcelona.com/wp-content/uploads/2020/06/IMG_7766-21.jpg',
      name: 'Barcelona',
      dateStart: '27.02.2024',
      dateEnd: '01.03.2024',
    },
  ];

  const firstRenderForToday = useRef(true);
  const firstRenderForWeek = useRef(true);
  const [trips, setTrips] = useState(tripsList);
  const [weather, setWeather] = useState('');
  const [weatherWeek, setWeatherWeek] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [location, setLocation] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [dateForCountdownTimer, setDateForCountdownTimer] = useState('');

  useEffect(() => {
    if (firstRenderForToday) {
      firstRenderForToday.current = false;
      return;
    }

    getForecastForToday(location).then((data) => {
      setWeather(data);
    });
  }, [location]);

  useEffect(() => {
    if (firstRenderForWeek) {
      firstRenderForWeek.current = false;
      return;
    }
    getForecastForPeriodOfTime(location, startDate, endDate).then((data) => {
      setWeatherWeek(data);
    });
  }, [location, startDate, endDate]);

  console.log(weather);
  console.log(weatherWeek);
  console.log(startDate);
  console.log(searchTerm);

  return (
    <div className={styles.content}>
      <Overlays setTrips={setTrips} setIsVisible={setIsVisible} isVisible={isVisible} />
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <SearchBar onSearch={setSearchTerm} />
          <TripList
            trips={trips}
            searchTerm={searchTerm}
            setLocation={setLocation}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            setIsOpen={setIsOpen}
            setDateForCountdownTimer={setDateForCountdownTimer}
          />

          <ForecastWeek weatherWeek={weatherWeek} />
        </div>
        <AddTripButton setIsVisible={setIsVisible} />
        {isOpen && <ForecastToday weather={weather} dateForCountdownTimer={dateForCountdownTimer} />}
      </main>
    </div>
  );
}

export default App;
