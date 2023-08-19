export default () => ({
  port: +(process.env.PORT || 3002),
  GitHub: {
    CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    REDIRECT_URI: process.env.GITHUB_REDIRECT_URI,
  },
});
