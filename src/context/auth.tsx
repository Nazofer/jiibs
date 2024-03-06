import { User, mockUser } from '@/types/user';
import { createContext, useState } from 'react';

interface UserContextData {
  user: User;
  setUser: (user: User) => void;
  partialSetUser: (partialUser: Partial<User>) => void;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export default UserContext;

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>(mockUser);

  const partialSetUser = (partialUser: Partial<User>) => {
    setUser({ ...user, ...partialUser });
  };

  return (
    <UserContext.Provider value={{ user, setUser, partialSetUser }}>
      {children}
    </UserContext.Provider>
  );
};
