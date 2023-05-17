import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import './App.css';
import AddRoom from './pages/AddRoom';
import DeleteRoom from './components/DeleteRoom';
import RoomDetails from './components/Detail';
import Reservation from './pages/Reservation';

function App() {
  const [roomId, setRoomId] = useState('');
  const handleClick = (data) => {
    setRoomId(data);
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/room/new" element={<AddRoom />} />
        <Route path="/delete" element={<DeleteRoom />} />
        <Route path="reservation/new" element={<Reservation roomId={roomId} />} />
        <Route exact path="/room/:id" element={<RoomDetails onButtonReservedClick={handleClick} />} />
      </Routes>
    </Router>
  );
}

export default App;
