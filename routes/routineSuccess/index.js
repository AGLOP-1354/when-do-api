const express = require('express');
const controllers = require('./controllers');

const router = express.Router();

router.post('/add', controllers.addRoutineSuccess);
router.post('/update', controllers.updateRoutineSuccess);
router.get('/:routineId', controllers.getRoutineSuccess);

module.exports = router;
