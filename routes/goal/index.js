const express = require('express');
const controllers = require('./controllers');

const router = express.Router();

router.post('/add', controllers.addGoal);
router.post('/update', controllers.updateGoal);
router.get('/:userId', controllers.getGoalList);

module.exports = router;
