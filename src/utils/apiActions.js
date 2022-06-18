import axios from 'axios';

export const doGet = async (uri, params = {}) => {
  //const token = await utility.getItem('token');

  const config = {
    headers: {
      // Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    params,
  };
  console.log('config 4', config);
  console.log('ur 4', 'http://176.113.80.7:62000/' + uri);
  return await axios.get('http://176.113.80.7:62000/' + uri, config);
};

export const doPost = async (uri, postData, params = {}) => {
  console.log('params ', postData);
  const config = {
    headers: {
      //  Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    params,
  };
  return await axios.post('http://128.199.31.140:8444' + uri, postData, config);
};

export const doPatch = async (uri, patchData, params = {}) => {
  const config = {
    headers: {
      // Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    params,
  };
  return await axios.patch(
    'https://swttoken.herokuapp.com/' + uri,
    patchData,
    config,
  );
};

/*

export const doPut = (uri, putData, params = {}) => {
  return axiosInstance.put(`${ROOT_URL}` + "/api/" + uri, putData, {
    params
  });
};

export const doDelete = (uri, delData, params = {}) => {
  return axiosInstance.delete(`${ROOT_URL}` + "/api/" + uri, delData, {
    params
  });
};

export const doGetCancelToken = (uri, token, params = {}) => {
  return axiosInstance.get(`${ROOT_URL}` + "/api/" + uri, {
    params,
    cancelToken: token
  });
};

export const doPostExcel = (uri, postData, params = {}) => {
  return axiosInstance.post(`${ROOT_URL}` + "/api/" + uri, postData, {
    params,
    responseType: "blob"
  });
};
*/
