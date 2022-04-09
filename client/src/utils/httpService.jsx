import axios from 'axios';

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    //console.log('Unexpected error occured!');
  }

  return Promise.reject(error);
});

const http = axios.create({
  //baseURL: 'https://tribeone-api-54853.nonceblox.com/api/',
  baseURL: 'http://localhost:3900',
});

// export default {
//   get: axios.get,
//   post: axios.post,
//   put: axios.put,
//   delete: axios.delete,
// };

export default http;
