const express = require('express')
const controllers = require('../controllers/storeController')

const router = express.Router()


router.get('/', (req, res) => {
    controllers.getProducts(req,res);
 })
 
 // matches POST requests sent to /api/users/create
 router.post('/create', (req, res) => {
    controllers.postProducts(req.body, res)
 })
 
 router.put('/:id', (req, res) => {
     controllers.putProducts(req, res)
 })
 
 router.delete('/:id', (req, res) => {
     controllers.deleteProducts(req, res)
 })
 

module.exports = router;
