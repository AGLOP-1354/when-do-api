const express = require('express');
const controllers = require('./controllers');

const router = express.Router();

router.post('/add', controllers.addRoutine);
router.get('/:userId', controllers.getRoutineList);

module.exports = router;
