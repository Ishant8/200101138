const router = require('express').Router();
const railwayController = require('../controllers/railway-service-controller')
router
    .post('/register', railwayController.registerCompany)
    .get('/get-trains', railwayController.getTrains)
    .post('/get-access-token', railwayController.getAccessToken)
    .get('/get-train', railwayController.getTrain)

module.exports = router;