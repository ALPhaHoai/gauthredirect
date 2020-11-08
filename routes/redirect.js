var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
    const {url, path} = req.query
    delete req.query.url
    delete req.query.path

    let redirectUrl = `${url}/${path}`
    for (let key in req.query) {
        redirectUrl += "&" + key + "=" + req.query[key]
    }

    res.redirect(redirectUrl)
})

module.exports = router
