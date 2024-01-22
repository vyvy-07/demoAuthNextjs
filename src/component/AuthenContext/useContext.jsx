import { InforUser } from '@/service/inforUser';
import { LoginForm } from '@/service/loginForm';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
const AuthenContext = createContext({});

export const AuthenProvider = ({ children }) => {
  const [inforUser, setInforUser] = useState(null);
  //đăng nhập
  const onLogin = async (data) => {
    try {
      if (data) {
        const res = await LoginForm.postInformation({
          email: data?.email,
          password: data?.password,
        });
        const mainData = res?.data?.result;
        if (mainData) {
          const saveToken = localStorage.setItem(
            'token user',
            mainData?.loginToken
          );
          getInforUser(mainData?.loginToken);
        }
      }
    } catch (error) {
      console.log('error', error);
    }
  };
  //lấy thông tin người dùng
  const getInforUser = async (token) => {
    try {
      const res = await InforUser.getInforUser(token);
      if (res?.data?.result?.id) {
        setInforUser(res?.data?.result);
      }
    } catch (error) {
      console.log('error', error);
    }
  };
  //đăng xuất
  const onLogOut = () => {
    setInforUser(null);
    localStorage.removeItem('token user');
  };
  //khi reload thì k bị mất thông tin người dùng
  useEffect(() => {
    const token = localStorage.getItem('token user');
    if (token) {
      getInforUser(token);
    }
  }, []);

  return (
    <AuthenContext.Provider value={{ inforUser, onLogin, onLogOut }}>
      {children}
    </AuthenContext.Provider>
  );
};
export const useAuthen = () => useContext(AuthenContext);
