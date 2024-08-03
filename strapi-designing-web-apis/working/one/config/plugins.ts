export default (env) => ({
  lms: {
    enabled: true,
    resolve: "./src/plugins/lms",
  },
  "users-permissions": {
    config: {
      jwt: {
        expiresIn: "3d",
      },
    },
  },
});
