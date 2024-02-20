import { useState, useEffect } from 'react';
import { getForecastForToday } from './services/weather';
import TripList from './components/TripList/TripList';
import Header from './components/Header/Header';

function App() {
  const [weather, setWeather] = useState('');
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
    getForecastForToday('london').then((data) => {
      setWeather(data);
    });
  }, []);

  console.log(weather);

  return (
    <>
      <Header />
      <TripList trips={trips} />
    </>
  );
}

export default App;
