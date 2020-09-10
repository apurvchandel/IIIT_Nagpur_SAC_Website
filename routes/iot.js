// Full Documentation - https://docs.turbo360.co
const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
  res.render('iot',null )
})


module.exports = router
