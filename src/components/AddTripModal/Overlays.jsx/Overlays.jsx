import { createPortal } from 'react-dom';
import AddTripModal from '../AddTripModal';

const mountElement = document.getElementById('overlays');

function Overlays({ isVisible, setIsVisible, setTrips }) {
  return createPortal(
    <>{isVisible && <AddTripModal setTrips={setTrips} setIsVisible={setIsVisible} />}</>,
    mountElement,
  );
}

export default Overlays;
