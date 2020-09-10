// Full Documentation - https://docs.turbo360.co
const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
  res.render('ACE',null )
});


module.exports = router
