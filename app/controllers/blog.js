const express = require('express')

const router = express.Router()

router.get('/home', (req, res) => {
  var data = {
    err: false,
    title: "Hoàng Hiệp - Adulthood of a weirdo"
  }
  res.render('blog/index', { data: data })
})

module.exports = router