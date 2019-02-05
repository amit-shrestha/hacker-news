import { http } from '../utils/config';

/**
 *
 * @param {String} option
 */
export const getStoryIds = option => {
  return http
    .get(`/${option}.json`)
    .then(response => {
      return response.data;
    })
    .catch(err => err);
};

/**
 *
 * @param {Integer} id
 */
export const getItem = id => {
  return http
    .get(`/item/${id}.json`)
    .then(response => {
      return response.data;
    })
    .catch(err => err);
};
