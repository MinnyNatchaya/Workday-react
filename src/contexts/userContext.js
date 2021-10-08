import { createContext, useState } from 'react';
import { user as initailUser } from '../services/localStorage';

const UserContext = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState(initailUser);
  const role = !user?.role ? 'guest' : user.role === 'Client' ? 'client' : 'worker';

  const [chooseCategory, setChooseCategory] = useState('');

  return (
    <UserContext.Provider value={{ user, setUser, role, chooseCategory, setChooseCategory }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
