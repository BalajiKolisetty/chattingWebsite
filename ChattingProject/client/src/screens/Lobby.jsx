import React, { useState, useCallback } from 'react'
import { useSocket } from '../context/SocketProvider';

const LobbyScreen = () => {
    const [email, setEmail] = useState("");
    const [room, setRoom] = useState("");
    const socket = useSocket();
    console.log(socket);

    const handleSubmitForm = useCallback((e) => {
        e.preventDefault();
        console.log(email, room);
    });
    return (
        <div>
            <h1>Lobby</h1>
            <form onSubmit={handleSubmitForm}>
                <label htmlFor='email'>Email ID goes here</label>
                <input type='email' id='email' value={email} onChange={e=>setEmail(e.target.value)}/>
                <br />
                <label htmlFor='room'>Room Code goes here</label>
                <input type='text' id='room' value={room} onChange={e=>setRoom(e.target.value)}/>
                <br />
                <button>Click to Join</button>
            </form>
        </div>
    )
}

export default LobbyScreen;
