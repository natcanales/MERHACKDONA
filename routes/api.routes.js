const express = require('express')
const router = express.Router()

const Store = require('./../models/store.model')

// http://localhost:3000/api/stores
router.get('/', (req, res) => {

    const location = {
        type: "Point",
        coordinates: {
            latitude: 40.369240,
            longitude: -3.688777
        }
    }

    Store
        .create({ name: "Merhackona", location })
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))

    Store
        .find()
        .then(stores => res.json(stores))
        .catch(err => console.log("Error!", err))
})


module.exports = router