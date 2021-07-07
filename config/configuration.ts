export default () => ({
  auth: {
    expire_token: 600, // 10 minute = 600
    expire_refresh_token: 2592000, // 1 month
    expire_verify_token: '1h'
  },
  emailOption: {
    serverMail: 'smtp.gmail.com',
    serverPort: 465,
    authUser: 'tungnt2k@gmail.com',
    authPass: 'wjctgsszctjujvnp',
  },
  refDomain: {
    user: 'https://example.com',
  },
  serviceName: 'Base Falcon',
});
