const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// matches GET requests sent to /api/users
// (the prefix from server.js)
router.get('/', (req, res) => {
   Controllers.locationController.getLocations(res);
})

router.post('/create', (req, res) => {
   Controllers.locationController.createLocation(req.body, res)
})

router.put('/:id', (req, res) => {
    Controllers.locationController.updateLocation(req, res)
})

router.delete('/:id', (req, res) => {
    Controllers.locationController.deleteLocation(req, res)
})

module.exports = router;