const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/main'); 
const controllerLocations = require('../controllers/locations');
const controllerOthers = require('../controllers/others');

/* GET home page. */
router.get('/', ctrlMain.index);

/* Location pages */ 
router.get('/locations', controllerLocations.homelist);
router.get('/location', controllerLocations.locationInfo);
router.get('/location/review/new', controllerLocations.addReview);

/* Other pages */ 
router.get('/about',controllerOthers.about);

module.exports = router;
