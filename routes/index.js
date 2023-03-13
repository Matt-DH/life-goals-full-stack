var express = require('express');
var router = express.Router();

// Require controller modules.
var goal_controller = require('../controllers/goalsController');

/* GET home page. */
router.get('/', goal_controller.goal_list);

/* GET goal detail page. */
router.get('/goals/:id', goal_controller.goal_detail);


/* GET create goal page. */
router.get("/create", goal_controller.goal_create_get);

/* POST create goal page. */
router.post("/create", goal_controller.create_goal);

module.exports = router;
