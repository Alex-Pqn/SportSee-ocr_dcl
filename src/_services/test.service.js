import { requestOptions } from '../_helpers/request-options';

const getApiBaseUrl = () => 'localhost:3000';

export const testService = {
  findAll,
  findOne,
};

async function findAll() {
  return fetch(getApiBaseUrl(), requestOptions.get())
    .then((res) => {
      if (!res.ok)
        return Promise.reject(`Unable to get data from ${getApiBaseUrl()}.`);

      return res.json();
    })
    .then((data) => data)
    .catch((err) => {
      throw err;
    });
}

async function findOne(params) {
  return fetch(getApiBaseUrl(), requestOptions.get())
    .then((res) => {
      if (!res.ok)
        return Promise.reject(
          `Unable to get the data from ${getApiBaseUrl()}.`
        );

      return res.json();
    })
    .then((data) => data)
    .catch((err) => {
      throw err;
    });
}
