export const Environments = {
  production: 'production',
  development: 'development',
  tests: 'tests',
};

export const NODE_ENV = Environments.development;

export const getApi = () => process.env.REACT_APP_BASE_API_URL;
