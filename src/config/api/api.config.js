const apiUrl = 'http://localhost:3000';

export const Environments = {
  production: 'production',
  development: 'development',
  tests: 'tests',
};

export const NODE_ENV = Environments.development;

export const getApi = () => apiUrl;
