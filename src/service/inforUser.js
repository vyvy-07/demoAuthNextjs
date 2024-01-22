import axios from 'axios';

export const InforUser = {
  getInforUser(token) {
    return axios.get(
      `https://api.nongthonviet.com.vn/public/user/me?token=${token}`
    );
  },
};
