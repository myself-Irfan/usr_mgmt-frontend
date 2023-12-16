//configuration for setting up a proxy to handle cross-origin issues

const { createProxyMiddleware } = require('http-proxy-middleware');

const apiProxyConfig = {
    target: 'http://127.0.0.1:8000',
    changeOrigin: true,
    onError: (err, req, res) => {
        console.error('Proxy Error:', err);
        res.writeHead(500, {
            'Content-Type': 'text/plain',
        });
        res.end('Something went wrong. Please try again later.');
    },
};

module.exports = function (app) {
    app.use('/api', createProxyMiddleware(apiProxyConfig));
};