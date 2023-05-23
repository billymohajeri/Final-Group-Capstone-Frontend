import React from 'react';
import { PropTypes } from 'prop-types';
import FormAddReservation from '../components/FormAddReservation';
import Sidebar from '../components/Sidebar';
import MobileMenu from '../components/MobileMenu';

const Reservation = ({ roomId }) => (
  <div
    className="bigContainer"
    style={{
      backgroundImage: 'url(/reserve.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}
  >
    <Sidebar />
    <MobileMenu />
    <FormAddReservation roomId={roomId} />
  </div>
);

Reservation.propTypes = {
  roomId: PropTypes.string.isRequired,
};

export default Reservation;
