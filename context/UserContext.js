import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: '',
    user_id: '',
    user_phone_number: '',
    user_password: '',
    user_password2: '',
    user_name: '',
    user_profile_image: '',
    user_address: '',
    user_detailed_address: '',
    // user_nickname: '',
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
