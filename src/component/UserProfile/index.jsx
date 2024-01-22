import React from 'react';
import { useAuthen } from '../AuthenContext/useContext';

const ProfileUser = () => {
  const { inforUser, onLogin, onLogOut } = useAuthen();

  return (
    <div>
      {!!inforUser && (
        <>
          <h1>Login success! </h1>
          <h2>{inforUser?.fullName} </h2>
          <h3>{inforUser?.email} </h3>
          <button
            type="button"
            onClick={onLogOut}
            className=" bg-blue-200 mt-4  text-center"
          >
            Đăng xuất
          </button>
        </>
      )}
    </div>
  );
};

export default ProfileUser;
