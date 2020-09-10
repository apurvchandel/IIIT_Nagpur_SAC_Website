// Full Documentation - https://docs.turbo360.co
const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
  res.render('Strokes',null )
})


module.exports = router
