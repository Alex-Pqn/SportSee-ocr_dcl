import { userMockedService } from '../../../_services/mocks/user.mocked.service';
import { userService } from '../../../_services/user.service';

import { Environments, NODE_ENV } from '../api.config';

const defaultUserId = 12;

export const getUserService = () => {
  switch (NODE_ENV) {
    case Environments.production:
      return userService;
    case Environments.development:
      return userMockedService;
    case Environments.tests:
      return userMockedService;
    default:
      return userMockedService;
  }
};

export const getDefaultUserId = () => defaultUserId;
