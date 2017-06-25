export const WEB_PORT = process.env.port || 8000
export const WDS_PORT = 7000
export const STATIC_PATH = '/static'
export const RAVEN_PATH_SERVER = process.env.RAVEN_PATH_SERVER
export const RAVEN_PATH_CLIENT = process.env.RAVEN_PATH_CLIENT || 'https://0b74848c2fc14a298467f7f81cc5b143@sentry.io/180803'

export const MONGO_DEV_URI = process.env.MONGO_DEV_URI || 'mongodb://127.0.0.1/sharemykitchen_dev'
export const MONGO_TEST_URI = process.env.MONGO_TEST_URI || 'mongodb://127.0.0.1/sharemykitchen_test'
export const MONGO_PROD_URI = process.env.MONGO_PROD_URI || 'mongodb://127.0.0.1/sharemykitchen'

export const FACEBOOK_CLIENT_ID = process.env.FACEBOOK_CLIENT_ID
export const FACEBOOK_CLIENT_SECRET = process.env.FACEBOOK_CLIENT_SECRET
export const FACEBOOK_CALLBACK_URL = process.env.FACEBOOK_CALLBACK_URL

export const COOKIE_SECRET = process.env.COOKIE_SECRET

export const IO_CONNECT = 'connect'
export const IO_DISCONNECT = 'disconnect'
export const IO_CLIENT_REQUEST_START = 'IO_CLIENT_REQUEST_START'
export const IO_CLIENT_REQUEST_MORE = 'IO_CLIENT_REQUEST_MORE'
export const IO_SERVER_RESPONSE_MORE = 'IO_SERVER_RESPONSE_MORE'
export const IO_SERVER_RESPONSE_DONE = 'IO_SERVER_RESPONSE_DONE'

export const LISTING_PICTURE = 'LISTING_PICTURE'
export const LISTING_PICTURE_START = 'LISTING_PICTURE_START'
export const LISTING_PICTURE_PROGRESS = 'LISTING_PICTURE_PROGRESS'
export const LISTING_PICTURE_SUCCESS = 'LISTING_PICTURE_SUCCESS'
export const LISTING_PICTURE_FAILURE = 'LISTING_PICTURE_FAILURE'

export const APP_NAME = 'Share My Kitchen'
export const APP_CONTAINER_CLASS = 'js-app'
export const APP_CONTAINER_SELECTOR = `.${APP_CONTAINER_CLASS}`

export const FEATURE_TYPES = [
  {
    type: 'Stove Type',
    children: [
      { name: 'stove', label: 'No Preference', value: '' },
      { name: 'stove', label: 'Gas Stove', value: 'gas' },
      { name: 'stove', label: 'Electric Stove', value: 'electric' },
    ],
  },
  {
    type: 'Oven Type',
    children: [
      { name: 'oven', label: 'No Preference', value: '' },
      { name: 'oven', label: 'Gas Oven', value: 'gas' },
      { name: 'oven', label: 'Electric Oven', value: 'electric' },
    ],
  },
  {
    type: 'Mixer Type',
    children: [
      { name: 'mixer', label: 'No Preference', value: '' },
      { name: 'mixer', label: 'KitchenAid', value: 'kitchenaid' },
      { name: 'mixer', label: 'Other Mixer', value: 'other' },
    ],
  },
  {
    type: 'Blender Type',
    children: [
      { name: 'blender', label: 'No Preference', value: '' },
      { name: 'blender', label: 'Vitamix Blender', value: 'vitamix' },
      { name: 'blender', label: 'Other Blender', value: 'other' },
    ],
  },
  {
    type: 'Refrigerator Type',
    children: [
      {
        name: 'refrigerator',
        label: 'No Preference',
        value: '',
      },
      {
        name: 'refrigerator',
        label: 'Stainless Steel Refrigerator',
        value: 'stainless',
      },
      {
        name: 'refrigerator',
        label: 'Black Refrigerator',
        value: 'black',
      },
    ],
  },
]
