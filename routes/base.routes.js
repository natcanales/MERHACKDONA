const express = require('express')
const router = express.Router()

const Store = require("./../models/store.model")

// Endpoints
router.get("/", (req, res) => res.render('pages/index'))

module.exports = router
