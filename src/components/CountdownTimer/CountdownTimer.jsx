import { useState, useEffect } from 'react';
import moment from 'moment';
import styles from './CountdownTimer.module.css';

function CountdownTimer({ startDate }) {
  const [countdown, setCountdown] = useState('');
  const [days, setDays] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = moment();
      const start = moment(startDate, 'DD.MM.YYYY');

      const duration = moment.duration(start.diff(now));

      const days = Math.floor(duration.asDays());
      const hours = duration.hours();
      const minutes = duration.minutes();
      const seconds = duration.seconds();

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
      setCountdown(null);

      if (duration.asMilliseconds() <= 0) {
        clearInterval(intervalId);
        setCountdown('Trip has started!');
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [startDate]);

  return (
    <div className={styles.timer}>
      {!countdown ? (
        <>
          <div className={styles.days}>
            <p className={styles.time}>{days}</p>
            <p className={styles.timesProperties}>Days</p>
          </div>
          <div className={styles.hours}>
            <p className={styles.time}>{hours}</p>
            <p className={styles.timesProperties}>Hours</p>
          </div>
          <div className={styles.minutes}>
            <p className={styles.time}>{minutes}</p>
            <p className={styles.timesProperties}>Minutes</p>
          </div>
          <div className={styles.seconds}>
            <p className={styles.time}>{seconds}</p>
            <p className={styles.timesProperties}>Seconds</p>
          </div>
        </>
      ) : (
        <p>{countdown}</p>
      )}
    </div>
  );
}

export default CountdownTimer;
