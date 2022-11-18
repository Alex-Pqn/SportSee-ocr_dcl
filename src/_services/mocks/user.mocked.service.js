import UserModel from '../../_models/user/user.model';
import UserActivityModel from '../../_models/user/user.activity';
import UserAverageSessionsModel from '../../_models/user/user.average.sessions';
import UserPerformanceModel from '../../_models/user/user.performance';

import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../../assets/dataMocks';

export const userMockedService = {
  findOne,
  findOneActivity,
  findOneAverageSessions,
  findOnePerformance,
};

/**
 * GET MOCK: Find One
 * Retrieves mocked user.
 * @param {Number} userId
 * @returns {UserModel}
 */
async function findOne(userId) {
  const userMock = USER_MAIN_DATA.filter((user) => user.id === userId).shift();

  if (!userMock) return Promise.reject('Unable to find one mocked user.');

  return new UserModel(userMock);
}

/**
 * GET MOCK: Find One Activity
 * Retrieves mocked user activity.
 * @param {Number} userId
 * @returns {UserActivityModel}
 */
async function findOneActivity(userId) {
  const userActivity = USER_ACTIVITY.filter(
    (userActivity) => userActivity.userId === userId
  ).shift();

  if (!userActivity)
    return Promise.reject('Unable to find one mocked user activity.');

  return new UserActivityModel(userActivity);
}

/**
 * GET MOCK: Find One Average Sessions
 * Retrieves mocked user average sessions.
 * @param {Number} userId
 * @returns {UserAverageSessionsModel}
 */
async function findOneAverageSessions(userId) {
  const userAverageSessions = USER_AVERAGE_SESSIONS.filter(
    (userAverageSessions) => userAverageSessions.userId === userId
  ).shift();

  if (!userAverageSessions)
    return Promise.reject('Unable to find one mocked user average sessions.');

  return new UserAverageSessionsModel(userAverageSessions);
}

/**
 * GET MOCK: Find One Performance
 * Retrieves mocked user performance.
 * @param {Number} userId
 * @returns {UserPerformanceModel}
 */
async function findOnePerformance(userId) {
  const userPerformance = USER_PERFORMANCE.filter(
    (userPerformance) => userPerformance.userId === userId
  ).shift();

  if (!userPerformance)
    return Promise.reject('Unable to find one mocked user performance.');

  return new UserPerformanceModel(userPerformance);
}
