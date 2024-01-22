// pages/_app.js
'use client';

import { AuthenProvider } from '@/component/AuthenContext/useContext';

const Provider = ({ children }) => {
  return <AuthenProvider>{children}</AuthenProvider>;
};

export default Provider;
