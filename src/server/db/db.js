
const mongoose = require('mongoose')

const mongoDB = 'mongodb://127.0.0.1/sharemykitchen'

mongoose.connect(mongoDB)

const db = mongoose.connection

   // eslint-disable-next-line no-console
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
