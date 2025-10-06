const { defineConfig } = require('cypress')
require('dotenv').config()


module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',

    env: {
      apiUrl: 'https://gitlab.com/api/v4',
      gitlabToken: process.env.GITLAB_TOKEN, 
      user_name: process.env.USER_NAME,
      user_password: process.env.USER_PASSWORD,
      user_password_fail: process.env.USER_PASSWORD_FAIL
    },
  },

  fixturesFolder: false,
  video: false,
})
