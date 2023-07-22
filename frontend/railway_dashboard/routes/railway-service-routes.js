const router = require('express').Router();
const railwayController = require('../controllers/railway-service-controller')
router
    .post('/register', railwayController.registerCompany)
    .get('/get-trains', railwayController.getTrains)
    .post('/get-access-token', railwayController.getAccessToken)
    .post('/get-train', railwayController.getTrain)

module.exports = router;