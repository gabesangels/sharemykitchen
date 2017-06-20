export const WEB_PORT = process.env.port || 8000
export const WDS_PORT = 7000
export const STATIC_PATH = '/static'
export const RAVEN_PATH_SERVER = process.env.RAVEN_PATH_SERVER
export const RAVEN_PATH_CLIENT = process.env.RAVEN_PATH_CLIENT

export const MONGO_DEV_URI = process.env.MONGO_DEV_URI || 'mongodb://127.0.0.1/sharemykitchen_dev'
export const MONGO_TEST_URI = process.env.MONGO_TEST_URI || 'mongodb://127.0.0.1/sharemykitchen_test'
export const MONGO_PROD_URI = process.env.MONGO_PROD_URI || 'mongodb://127.0.0.1/sharemykitchen'

export const APP_NAME = 'Greenfield Project'

export const APP_CONTAINER_CLASS = 'js-app'
export const APP_CONTAINER_SELECTOR = `.${APP_CONTAINER_CLASS}`
