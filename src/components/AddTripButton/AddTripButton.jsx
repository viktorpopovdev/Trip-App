import addNewTrip from '../../assets/addNewTrip.svg';
import styles from './AddTripButton.module.css';

function AddTripButton({ setIsVisible }) {
  function openModal() {
    setIsVisible(true);
  }
  return (
    <button className={styles.button} onClick={openModal}>
      <div className={styles.backgroundIcon}></div>
      <img src={addNewTrip} className={styles.icon} />
    </button>
  );
}

export default AddTripButton;
