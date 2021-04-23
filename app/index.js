require('colors')
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')
const cookieParser = require('cookie-parser')
const app = express()
const createRoute = require('./router')
const root = process.env.VITE_ROOT

app
  .use(cors())
  .use(cookieParser())
  .use(express.static(path.join(root, process.env.PUBLIC_URL)))

const Route = createRoute({
  app,
  listen: app.listen(process.env.VITE_API_PORT, () => {
    // listen callback.
  }),
  database: {},
  webSocket: {
    // onConnection
  },
})
console.log(`${process.env.VITE_BASE_URL}:${process.env.VITE_API_PORT}`.blue)
module.exports = Route
