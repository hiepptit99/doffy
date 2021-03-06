const express = require('express')

const router = express.Router()
router.use('/admin', require(__dirname + '/admin'))
router.use('/blog', require(__dirname + '/blog'))

router.get('/', (req, res) => {
  res.redirect('/blog/home')
})

module.exports = router