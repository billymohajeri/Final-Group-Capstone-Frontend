/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Flip, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaTrashAlt } from 'react-icons/fa';
import {
  useGetRoomsDetailsQuery,
  useDeleteRoomMutation,
} from '../api/roomsData';
import RecentlyDeletedRooms from './Deleted';
import './css/delete.css';
import Sidebar from './Sidebar';
import MobileMenu from './MobileMenu';

const DeleteRoom = () => {
  const { data, error, isLoading } = useGetRoomsDetailsQuery();
  const [deleteRoom] = useDeleteRoomMutation();
  const notify = () => toast.success('Cottage successfully deleted', {
    position: 'top-center',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });

  if (isLoading) {
    return (
      <div className="spinnerContainer">
        <span className="loader" />
      </div>
    );
  }

  const handleDelete = (roomId, roomName) => {
    if (
      window.confirm(`Are you sure you want to delete the cottage "${roomName}"?`)
    ) {
      const deletedRooms = JSON.parse(localStorage.getItem('deletedRooms')) || [];
      const deletedRoom = data.find((room) => room.id === roomId);
      deletedRooms.push(deletedRoom);
      localStorage.setItem('deletedRooms', JSON.stringify(deletedRooms));
      deleteRoom(roomId);
      notify();
    }
  };

  if (error) {
    return (
      <p>
        Error:
        {error.message}
      </p>
    );
  }

  return (
    <div className="bigContainer">
      <MobileMenu />
      <Sidebar />
      <div className="deleteContainer">
        <div className="rooms">
          <h1 id="deleteTitle">CHOOSE A ROOM TO DELETE</h1>
          <ul id="ul">
            {data.map((room) => (
              <li id="li" key={room.id}>
                <div className="imageContainer">
                  <h4 id="name">{room.name}</h4>
                  <img id="img" alt="room" src={room.image_url} />
                </div>
                <button
                  onClick={() => handleDelete(room.id, room.name)}
                  disabled={isLoading}
                  type="button"
                  className="myButton"
                  id="button"
                >
                  <FaTrashAlt />
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <RecentlyDeletedRooms />
        </div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          transition={Flip}
          pauseOnHover={false}
          theme="light"
        />
      </div>
    </div>
  );
};

export default DeleteRoom;
