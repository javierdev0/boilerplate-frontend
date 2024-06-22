import { config } from './config.env'

const ENV_VARIABLES = process.env.NODE_ENV !== 'production' ? config : {}

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
