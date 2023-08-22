import axios from 'axios';

/**
 * Uncomment to Mock
 */
// import APIs from '../services/constants';
// var MockAdapter = require('axios-mock-adapter');

// const mockTodosData = {
//   mockData: {
//     userId: 1,
//     id: 1,
//     title: 'mock title',
//     completed: false,
//   },
// };

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 60000,
});

const requestHandler = async request => {
  const updatedRequest = request;
  // updatedRequest.headers.Authorization = `Bearer ${store.getState()?.user.token}`;
  //   updatedRequest.headers.countryCode = 'US';
  //   updatedRequest.headers['Accept-Language'] = 'EN';
  //   updatedRequest.headers['User-Agent'] = 'agent';
  //   updatedRequest.headers['content-type'] = 'application/json; charset=utf-8';
  updatedRequest.params = updatedRequest?.params || {};
  //   updatedRequest.params.role = 'admin';
  //   updatedRequest.params.countryCode = 'US';
  return updatedRequest;
};

const responseHandler = response => response;

const errorHandler = async error => {
  const {status, code = {}, config} = error;
  const originalRequest = config;
  console.log(
    `****** - status - ${status} - ${code}, originalRequest - ${originalRequest.retryapi}`,
  );
  if (status != 200 && !originalRequest?.retryapi) {
    //retry once
    originalRequest.retryapi = true;
    return axiosInstance(originalRequest);
  }
  return Promise.reject(error);
};

axiosInstance.interceptors.request.use(
  request => requestHandler(request),
  error => errorHandler(error),
);

axiosInstance.interceptors.response.use(
  response => responseHandler(response),
  error => errorHandler(error),
);

/**
 * Uncomment to Mock
 */
// const mock = new MockAdapter(axiosInstance, {delayResponse: 1000});
// mock.onGet(APIs.TODOS_API).reply(200, mockTodosData);
// mock.onAny().passThrough();
export default axiosInstance;
