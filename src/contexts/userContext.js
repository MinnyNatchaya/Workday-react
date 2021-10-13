import { createContext, useState } from 'react';
import { user as initailUser } from '../services/localStorage';

const UserContext = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState(initailUser);
  const role = !user?.role ? 'guest' : user.role === 'Client' ? 'client' : 'worker';

  const [chooseService, setChooseService] = useState({});
  const [isUpSlip, setIsUpSlip] = useState(false);
  const [isFinishWork, setIsFinishWork] = useState(false);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        role,
        chooseService,
        setChooseService,
        isUpSlip,
        setIsUpSlip,
        isFinishWork,
        setIsFinishWork
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
