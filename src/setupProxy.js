const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/Service',
    createProxyMiddleware({
        target: 'https://tckimlik.nvi.gov.tr/',
      changeOrigin: true,
    })
  );
};