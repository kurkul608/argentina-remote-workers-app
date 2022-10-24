export default {
  api: {
    baseURL:
      process.env.NODE_ENV === "develop" ? "http://localhost:5050/" : undefined,
    timeout: 25000,
  },
};
