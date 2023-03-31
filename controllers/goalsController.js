// This file contains the controller functions. 
// 1. If the route is /, the goal_list function is called.
// 2. If the route is /goals/:id, the goal_detail function is called. 
// 3. If the route is /create, the goal_create_get function is called. 
// 4. If the route is /goals/:id/delete, the delete_goal function is called.

const goals = require("../models/goals");

// Search DB for all goals
exports.goal_list = function (req, res, next) {
    goals.find({}, "goal due_date date_created is_completed")
    .sort([["due_date", "ascending"]])
    .exec(function (err, result) {
            if (err) {
                return next(err);
            }
            res.render("index", { title: "Life Goals", goals: result });
        });
}

// Search DB for details of a specific goal
exports.goal_detail = function (req, res, next) {
    goals.findById(req.params.id) // req.params.id is the id of the goal
    .exec(function (err, result) {
        if (err) {
            return next(err);
        }
        res.render("goal_detail", { title: "Goal Detail", goal: result });
    });
}

// Display the create goal form
exports.goal_create_get = function (req, res, next) {
    res.render("create", { title: "New Goal" });
}

// Create a new goal from data in the request body (which comes from our form elements) and save it to the DB
exports.create_goal = function (req, res, next) {
    let goal = new goals({
        goal: req.body.goal,
        due_date: req.body.due_date,
        is_completed: req.body.is_completed
    });
    goal.save(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect("/");
    });
}

// Mark goal complete
exports.markcomplete_goal = function (req, res, next) {
    goals.findByIdAndUpdate(req.params.id, { is_completed: true }, function (err, docs) {
        if (err) {
            return next(err);
        } else {
            res.redirect("/")
        }
    })
};

// Mark goal incomplete
exports.markincomplete_goal = function (req, res, next) {
    goals.findByIdAndUpdate(req.params.id, { is_completed: false }, function (err, docs) {
        if (err) {
            return next(err);
        } else {
            res.redirect("/")
        }
    })
};


// Delete a goal from the DB. This triggers on a POST request from the goal_detail page.
exports.delete_goal = function (req, res, next) {
    goals.findByIdAndRemove(req.params.id, function deleteGoal(err) {
        if (err) {
            return next(err);
        }
        res.redirect("/");
    });
}

// Count number of goals in DB

// exports.goals_count = function (req, res, next) {
//     goals.countDocuments({}, function (err, count) {
//         if (err) {
//             return next(err);
//         }
//         res.send(`There are ${count} goals in the database.`);
//     });
// };

