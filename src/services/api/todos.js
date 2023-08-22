import axiosInstance from '../axiosInstance';
import APIs from '../constants';

const getTodos = async () => {
  try {
    return await axiosInstance.get(APIs.TODOS_API);
  } catch (error) {
    throw error;
  }
};

export default getTodos;
