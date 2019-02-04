import { http } from '../utils/config';

/**
 *
 * @param {*} option
 */
export const getStories = option => {
  return http
    .get(`/${option}.json`)
    .then(response => {
      return response.data;
    })
    .catch(err => err);
};

/**
 *
 * @param {*} id
 */
export const getItems = id => {
  return http
    .get(`/item/${id}.json`)
    .then(response => {
      return response.data;
    })
    .catch(err => err);
};
