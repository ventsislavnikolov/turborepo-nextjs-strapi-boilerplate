const path = require('path')

module.exports = {
  reactStrictMode: true,
  output: 'standalone',
  experimental: {
    appDir: true,
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
  transpilePackages: ['ui'],
}
