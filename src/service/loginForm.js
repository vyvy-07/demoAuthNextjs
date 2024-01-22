import axios from 'axios';

export const LoginForm = {
  postInformation(payload = {}, token) {
    return axios.post(
      'https://api.nongthonviet.com.vn/public/user/login',
      payload
    );
  },
};
