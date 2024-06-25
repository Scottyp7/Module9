const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get('/', (req, res) => {
   Controllers.countryController.getCountries(res);
})

router.post('/create', (req, res) => {
   Controllers.countryController.createCountry(req.body, res)
})

router.put('/:id', (req, res) => {
    Controllers.countryController.updateCountry(req, res)
})

router.delete('/:id', (req, res) => {
    Controllers.countryController.deleteCountry(req, res)
})

module.exports = router;

