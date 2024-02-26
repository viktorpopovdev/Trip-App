import { useState, useEffect } from 'react';
import moment from 'moment';
import { getCityPhoto } from '../../services/getCityPhoto';
import citiesNames from '../../utils/listOfCitiesNames';
import { useForm, Controller } from 'react-hook-form';
import closeIcon from '../../assets/closeIcon.svg';
import styles from './AddTripModal.module.css';

function AddTripModal({ setTrips, setIsVisible }) {
  const [firstRender, setFirstRender] = useState(true);
  const [cityPhoto, setCityPhoto] = useState();
  const [selectedCity, setSelectedCity] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  useEffect(() => {
    // Fetch city names from external API
    if (!firstRender) {
      getCityPhoto(selectedCity).then((data) => {
        setCityPhoto(data);
      });
    } else {
      setFirstRender(false);
      return;
    }
  }, [selectedCity, firstRender]);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const validateEndDate = (value) => {
    const startDateObj = moment(startDate, 'YYYY-MM-DD');
    const endDateObj = moment(value, 'YYYY-MM-DD');
    return endDateObj.isSameOrAfter(startDateObj) || 'End Date must be after Start Date';
  };

  const onClose = () => {
    setIsVisible(false);
    reset({
      city: '',
      startDate: '',
      endDate: '',
    });
  };

  const onSubmit = (data) => {
    setSelectedCity(data.city);
    setIsVisible(false);
    console.log(data);
    const start = moment(data.startDate);
    console.log(start);
    const formattedDateStart = start.format('DD.MM.YYYY');

    const end = moment(data.endDate, 'YYYY-MM-DD');
    const formattedDateEnd = end.format('DD.MM.YYYY');

    setTrips((prev) => [
      ...prev,
      {
        img: cityPhoto,
        name: data.city,
        dateStart: formattedDateStart,
        dateEnd: formattedDateEnd,
      },
    ]);

    reset({
      city: '',
      startDate: '',
      endDate: '',
    });
    // )
    // Handle form submission
  };

  console.log(citiesNames);

  return (
    <div className={styles['modal-overlay']}>
      <div className={styles['modal-window']}>
        <h2 className={styles.title}>Create trip</h2>
        <button className={styles.close} onClick={onClose}>
          <img src={closeIcon} />
        </button>
        <form className={styles['modal-content']} onSubmit={handleSubmit(onSubmit)}>
          <label className={styles.city}>
            City
            <Controller
              name="city"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <select
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    setSelectedCity(e.target.value);
                  }}
                  placeholder="Please select a city"
                >
                  <option value="">Please select a city</option>
                  {citiesNames.map((city) => (
                    <option key={city.id} value={city.cityName}>
                      {city.cityName}
                    </option>
                  ))}
                </select>
              )}
            />
            {errors.city && <span className={styles.error}>This field is required.</span>}
          </label>
          <label className={styles.startDate}>
            Start Date
            <input
              className={styles.date}
              type="date"
              {...register('startDate', { required: true })}
              min={moment().format('YYYY-MM-DD')}
              max={moment().add(15, 'days').format('YYYY-MM-DD')}
              onChange={(e) => handleStartDateChange(e.target.value)}
            />
            {errors.startDate && <span className={styles.error}>This field is required.</span>}
          </label>
          <label className={styles.endDate}>
            End Date
            <input
              className={styles.date}
              type="date"
              placeholder="Select end date"
              {...register('endDate', { required: true, validate: validateEndDate })}
              min={startDate}
              max={moment().add(15, 'days').format('YYYY-MM-DD')}
              onChange={(e) => handleEndDateChange(e.target.value)}
            />
            {errors.endDate && <span className={styles.error}>This field is required.</span>}
          </label>
          <div className={styles.actions}>
            <button className={styles.cancel} type="button" onClick={onClose}>
              Cancel
            </button>
            <button className={styles.submit} type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTripModal;
