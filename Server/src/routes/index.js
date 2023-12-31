const express = require('express')
const router = express.Router()

const login = require('../controllers/login')
const getCharById = require('../controllers/getCharById')
const postFav = require('../controllers/postFav')
const postUser = require('../controllers/postUser')
const deleteFav = require('../controllers/deleteFav')



router.get('/character/:id', getCharById)

// router.get('/character/:id', (req, res) => {
//     getCharById(req, res)
// }) la manera larga de hacerlo pero con el objetivo de mostrar como se implementa el req y el res.

router.get('/login', login)

// router.get('/login', (req, res) => {
//     login(req, res)
// })
router.post('/login', postUser)
router.post('/fav', postFav)

// router.post('/fav', (req, res) => {
//     postFav(req, res)
// })

router.delete('/fav/:id', deleteFav)

// router.delete('/fav/:id', (req, res) => {
//     deleteFav(req, res)
// })

module.exports = router