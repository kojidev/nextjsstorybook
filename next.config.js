const { applySvgr } = require('./config/applySvgr');
module.exports = {
  reactStrictMode: true,
  webpack(config) {
    applySvgr(config);

    return config;
  },
};
