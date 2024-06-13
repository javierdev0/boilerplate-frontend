/** @type {import('next').NextConfig} */
const ENV_VARIABLES = process.env.NODE_ENV !== 'production' ? require('./config.env') : {}

const nextConfig = {
  env: {
    ...ENV_VARIABLES
  },
  reactStrictMode: false,
  compiler: {
    ...(process.env.NODE_ENV === 'production' && {
      removeConsole: {
        exclude: ['error']
      }
    })
  }
}

module.exports = nextConfig
