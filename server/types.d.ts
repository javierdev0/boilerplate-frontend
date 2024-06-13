declare namespace NodeJS {
  interface ProcessEnv {
    ENV?: 'development' | 'release' | 'production'
    DB_HOST?: string
    DB_PORT?: number
    DB_USERNAME?: string
    DB_PASSWORD?: string
    DB_NAME?: string
    SSL_REJECT_UNAUTHORIZED?: string
    AUTO_LOAD_ENTITIES?: string
    SYNCHRONIZE?: string
    DEFAULT_LIMIT?: number

    REGION?: string
    ACCESS_KEY?: string
    SECRET_ACCESS?: string

    USER_POOL_ID?: string
    USER_POOL_WEB_CLIENT_ID?: string
    AUTH_IDENTITY?: string
    COGNITO_IDENTITY_POOL?: string

    MAIL_FROM?: string
    MAIL_HOST?: string
    MAIL_PASSWORD?: string
    MAIL_USER?: string

    S3_BUCKET_NAME?: string
  }
}
