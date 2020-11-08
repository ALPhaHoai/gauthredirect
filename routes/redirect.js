var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
    const {url,path,code} = req.query

    res.redirect(`${url}/${path}?code=${code}`)
})

module.exports = router
