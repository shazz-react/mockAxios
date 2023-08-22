import axiosInstance from '../axiosInstance';
import APIs from '../constants';

const getUsers = async () => {
  try {
    return await axiosInstance.get(APIs.USERS_API);
  } catch (error) {
    throw error;
  }
};

export default getUsers;
