var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
    const {url} = req.query
    res.redirect(url)
})

module.exports = router
