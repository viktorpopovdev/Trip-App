import { useState, useEffect } from 'react';
import { getForecastForToday } from './services/weather';
import Header from './components/Header/Header';
import TripList from './components/TripList/TripList';
import ForecastToday from './components/ForecastToday/ForecastToday';
import styles from './App.module.css';

function App() {
  const [weather, setWeather] = useState('');
  const [location, setLocation] = useState('');
  const trips = [
    {
      img: 'https://assets.editorial.aetnd.com/uploads/2019/03/topic-london-gettyimages-760251843-feature.jpg',
      name: 'London',
      dateStart: '2024-02-20',
      dateEnd: '2024-02-27',
    },
    {
      img: 'https://media.cntraveller.com/photos/653783ab9da3a22eb97452f9/4:3/w_4608,h_3456,c_limit/Cheapest_time_to_go_to_Paris_October23_Getty_Images.jpg',
      name: 'Paris',
      dateStart: '2024-02-27',
      dateEnd: '2024-03-05',
    },
    {
      img: 'https://comeonbarcelona.com/wp-content/uploads/2020/06/IMG_7766-21.jpg',
      name: 'Barcelona',
      dateStart: '2024-03-10',
      dateEnd: '2024-03-12',
    },
  ];

  useEffect(() => {
    getForecastForToday(location).then((data) => {
      setWeather(data);
    });
  }, [location]);

  console.log(weather);

  return (
    <>
      <Header />
      <main className={styles.container}>
        <TripList trips={trips} setLocation={setLocation} />
        <ForecastToday weather={weather} />
      </main>
    </>
  );
}

export default App;
