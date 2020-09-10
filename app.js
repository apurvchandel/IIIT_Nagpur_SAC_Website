// Full Documentation - https://docs.turbo360.co
const vertex = require('vertex360')({ site_id: process.env.TURBO_APP_ID })
const express = require('express')

const app = express() // initialize app

/*  Apps are configured with settings as shown in the conig object below.
    Options include setting views directory, static assets directory,
    and database settings. Default config settings can be seen here:
    https://docs.turbo360.co */

const config = {
  views: 'views', // Set views directory
  static: 'public', // Set static assets directory
  logging: true,

  
}

vertex.configureApp(app, config)
app.set('view engine', 'ejs')

// import routes
const index = require('./routes/index')
const ACE = require('./routes/ACE')
const Dev = require('./routes/Dev')
const DotSlash = require('./routes/DotSlash')
const Eklavya = require('./routes/Eklavya')
const iot = require('./routes/iot')
const probe = require('./routes/probe')
const Strokes = require('./routes/Strokes')
const Dim = require('./routes/Dim')


const api = require('./routes/api') // sample API Routes

// set routes
app.use('/', index)
app.use('/ace', ACE)
app.use('/dev', Dev)
app.use('/dotslash', DotSlash)
app.use('/eklavya', Eklavya)
app.use('/iot', iot)
app.use('/probe', probe)
app.use('/strokes', Strokes)
app.use('/dim', Dim)
app.use('/api', api) // sample API Routes

app.listen(3000)


module.exports = app



