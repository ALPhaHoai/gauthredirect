var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
    const {url, path} = req.query
    delete req.query.url
    delete req.query.path

    let redirectUrl = `${url}/${path}`
    let isFirst = true
    for (let key in req.query) {
        redirectUrl += (isFirst ? "?" : "&") + key + "=" + req.query[key]
        isFirst = false
    }

    res.redirect(redirectUrl)
})

module.exports = router
