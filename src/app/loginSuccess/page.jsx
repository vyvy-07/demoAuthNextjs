'use client';
import ProfileUser from '@/component/UserProfile';
import { useAuthen } from '@/component/AuthenContext/useContext';
import { useRouter } from 'next/navigation';

const LoginSuccess = () => {
  const { inforUser, onLogOut } = useAuthen();
  const router = useRouter();
  const token = localStorage.getItem('token user');
  //khong có token thì chuyển về homepage đăng nhập
  if (!token) {
    return router?.push('/');
  }
  return (
    <div>
      <ProfileUser />
      <h1 className="text-red-400">Page regex</h1>
      <p></p>
    </div>
  );
};

export default LoginSuccess;
