// This file contains all of the routes for the application. It is required in app.js and used to define all the routes of the application.

var express = require('express');
var router = express.Router();

// Require controller modules.
var goal_controller = require('../controllers/goalsController');
var user_controller = require('../controllers/userController');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Life Goals', isUserLoggedIn: false});
});

/* GET goals list page. */
router.get('/home', goal_controller.goal_list);

/* GET goal detail page. */
router.get('/goals/:id', goal_controller.goal_detail);

/* GET create goal page. */
router.get("/create", goal_controller.goal_create_get);

router.get("/signup", user_controller.signup);

//router.get("/login", user_controller.login);

/* POST create goal page. */
router.post("/create", goal_controller.create_goal);

/* POST request to update goal completion status to true */
router.post("/goals/:id/markcomplete", goal_controller.markcomplete_goal);

/* POST request to update goal completion status to false */
router.post("/goals/:id/markincomplete", goal_controller.markincomplete_goal);

/* POST request to delete Post. */
router.post("/goals/:id/delete", goal_controller.delete_goal);

router.post("/register", user_controller.create_user);

//router.post("/login", goal_controller.login_user);

module.exports = router;
