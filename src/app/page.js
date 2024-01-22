'use client';

import ProfileUser from '@/component/UserProfile';
import { useAuthen } from '@/component/AuthenContext/useContext';
import { useForm } from 'react-hook-form';

const HomePage = () => {
  const { inforUser, onLogin, onLogOut } = useAuthen();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm() || {};
  return (
    <>
      <ProfileUser />
      {!inforUser && (
        <div className="border border-black-700 p-5 max-w-[500px] text-center my-0 mx-auto">
          <p> vyhh1007@gmail.com , Nguyenthuyvy</p>
          <h1 className=" text-center uppercase font-bold pt-3">Login</h1>
          <div className="flex flex-col">
            <button type="submit" className=" bg-blue-200 mt-4 p-1 text-center">
              Login with Email
            </button>
            <button type="submit" className=" bg-blue-200 mt-4 p-1 text-center">
              Login with Facebook
            </button>
          </div>
          <form
            className=" flex flex-col  w-full my-0 mx-auto"
            onSubmit={handleSubmit(onLogin)}
          >
            <label className="mr-2 text-blue-400 ">
              email
              <input
                className="ml-2 border border-black mt-3"
                {...register('email', {
                  required: true,
                  pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                })}
              />
            </label>
            {errors?.email && <p className="text-red-400">No valid!!</p>}
            <label className="mr-2 text-blue-400">
              password
              <input
                type="password"
                className="ml-2 border border-black mt-3"
                {...register('password', {
                  required: true,
                })}
              />
            </label>
            {errors?.password && <p className="text-red-400">No valid!!</p>}
            <button
              type="submit"
              className="p-1  bg-blue-200 mt-4  text-center"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
};
export default HomePage;
