import { createContext, useContext, useEffect, useRef, useState } from 'react';

import { UserContext } from './userContext';
import io from 'socket.io-client';
import { API_URL } from '../config/env';

// const socket = io.connect(API_URL);

const SocketContext = createContext();

function SocketContextProvider(props) {
  const { user, role } = useContext(UserContext);
  const [currentMessage, setCurrentMessage] = useState('');
  const [socket, setSocket] = useState('');

  useEffect(() => {
    if (role !== 'guest') {
      setSocket(io.connect(API_URL));
    }
  }, [user]);

  useEffect(() => {
    if (socket !== '') {
      socket.emit('addSocketUser', user.id);
    }
  }, [socket]);

  return (
    <SocketContext.Provider
      value={{
        currentMessage,
        setCurrentMessage,
        socket
      }}
    >
      {props.children}
    </SocketContext.Provider>
  );
}
export { SocketContext, SocketContextProvider };
