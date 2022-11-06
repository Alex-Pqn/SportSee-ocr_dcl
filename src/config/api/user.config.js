import { getApi } from './api.config';

/**
 * GET: User
 * Retrieves user.
 * @param {Number} userId
 * @returns User id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
 */
const getUser = (userId) => getApi() + '/user/' + userId;

/**
 * GET: User Activity
 * Retrieves user activity.
 * @param {Number} userId
 * @returns User's activity day by day with kilograms and calories.
 */
const getUserActivity = (userId) => getUser(userId) + '/activity';

/**
 * GET: User Average Sessions
 * Retrieves user average sessions.
 * @param {Number} userId
 * @returns User average sessions per day, starting from Monday.
 */
const getUserAverageSessions = (userId) =>
  getUser(userId) + '/average-sessions';

/**
 * GET: User Performance
 * Retrieves user performance.
 * @param {Number} userId
 * @returns User's performance (energy, endurance, etc.).
 */
const getUserPerformance = (userId) => getUser(userId) + '/performance';

export const userRoutes = {
  getUser,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
};
