import { User } from 'entities/User';
import { useEffect, useState } from 'react';
import { USER_LOCAL_STORAGE_KEY } from 'shared/constants/localSotorage';

export const useAuth = () => {
  const [auth, setAuth] = useState<User>();

  useEffect(() => {
    const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
    if (user) {
      setAuth(JSON.parse(user));
    }
  }, []);

  return { auth };
};
