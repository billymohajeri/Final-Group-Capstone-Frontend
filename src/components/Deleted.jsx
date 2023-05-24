import React from 'react';

const RecentlyDeletedRooms = () => {
  const deletedRooms = JSON.parse(localStorage.getItem('deletedRooms')) || [];

  return (
    <div className="deletedContainer">
      <h1 id="deletedName">RECENTLY DELETED COTTAGES</h1>
      <ul id="ul">
        {deletedRooms.map((room) => (
          <li id="li" key={room.id}>
            <h4 id="name">{room.name}</h4>
            <div className="imageDiv">
              <img id="imgOld" alt="room" src={room.image_url} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentlyDeletedRooms;
