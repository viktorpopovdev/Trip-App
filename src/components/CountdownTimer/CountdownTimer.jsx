import { useState, useEffect } from 'react';
import moment from 'moment';

function CountdownTimer({ startDate }) {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = moment();
      // console.log(now);
      const start = moment(startDate, 'DD.MM.YYYY');

      const duration = moment.duration(start.diff(now));
      // const days = duration.days();
      const days = Math.floor(duration.asDays());
      const hours = duration.hours();
      const minutes = duration.minutes();
      const seconds = duration.seconds();

      const countdownString = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
      setCountdown(countdownString);

      if (duration.asMilliseconds() <= 0) {
        clearInterval(intervalId);
        setCountdown('Trip has started!');
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [startDate]);

  return (
    <div>
      <h2>Countdown Timer</h2>
      <p>{countdown}</p>
    </div>
  );
}

export default CountdownTimer;
