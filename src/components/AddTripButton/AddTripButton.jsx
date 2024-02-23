import styles from './AddTripButton.module.css';

function AddTripButton({ setIsVisible }) {
  function openModal() {
    setIsVisible(true);
  }
  return (
    <button className={styles.button} onClick={openModal}>
      + Add Trip
    </button>
  );
}

export default AddTripButton;
