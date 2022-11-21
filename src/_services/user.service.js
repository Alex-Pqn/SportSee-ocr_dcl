import { requestOptions } from '../_helpers/request-options';
import { userRoutes } from '../config/api/routes/user.routes.config';

import UserModel from '../_models/user/user.model';
import UserActivityModel from '../_models/user/user.activity';
import UserAverageSessionsModel from '../_models/user/user.average.sessions';
import UserPerformanceModel from '../_models/user/user.performance';

export const userService = {
  findOne,
  findOneActivity,
  findOneAverageSessions,
  findOnePerformance,
};

/**
 * GET: Find One
 * Retrieves user.
 * @param {Number} userId
 * @returns {UserModel}
 */
async function findOne(userId) {
  return fetch(userRoutes.getUser(userId), requestOptions.get())
    .then((res) => {
      if (!res.ok) return Promise.reject('Unable to find one user.');
      return res.json();
    })
    .then((data) => new UserModel(data.data))
    .catch((err) => {
      throw err;
    });
}

/**
 * GET: Find One Activity
 * Retrieves user activity.
 * @param {Number} userId
 * @returns {UserActivityModel}
 */
async function findOneActivity(userId) {
  return fetch(userRoutes.getUserActivity(userId), requestOptions.get())
    .then((res) => {
      if (!res.ok) return Promise.reject('Unable to find one user activity.');
      return res.json();
    })
    .then((data) => new UserActivityModel(data.data))
    .catch((err) => {
      throw err;
    });
}

/**
 * GET: Find One Average Sessions
 * Retrieves user average sessions.
 * @param {Number} userId
 * @returns {UserAverageSessionsModel}
 */
async function findOneAverageSessions(userId) {
  return fetch(userRoutes.getUserAverageSessions(userId), requestOptions.get())
    .then((res) => {
      if (!res.ok)
        return Promise.reject('Unable to find one user average sessions.');
      return res.json();
    })
    .then((data) => new UserAverageSessionsModel(data.data))
    .catch((err) => {
      throw err;
    });
}

/**
 * GET: Find One Performance
 * Retrieves user performance.
 * @param {Number} userId
 * @returns {UserPerformanceModel}
 */
async function findOnePerformance(userId) {
  return fetch(userRoutes.getUserPerformance(userId), requestOptions.get())
    .then((res) => {
      if (!res.ok)
        return Promise.reject('Unable to find one user performance.');
      return res.json();
    })
    .then((data) => new UserPerformanceModel(data.data))
    .catch((err) => {
      throw err;
    });
}
