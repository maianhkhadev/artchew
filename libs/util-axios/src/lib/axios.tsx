import axios from 'axios';

const getBaseURL = () => {
  const viteEnv = import.meta as unknown as {
    env?: Record<string, string | undefined>;
  };
  const nodeEnv =
    typeof process !== 'undefined'
      ? {
          nextPublicApiUrl: process.env.NEXT_PUBLIC_API_URL,
          apiUrl: process.env.API_URL,
        }
      : undefined;

  return (
    nodeEnv?.nextPublicApiUrl ??
    viteEnv.env?.VITE_API_URL ??
    nodeEnv?.apiUrl ??
    '/api'
  );
};

const instance = axios.create({
  baseURL: getBaseURL(),
});

export default instance;
