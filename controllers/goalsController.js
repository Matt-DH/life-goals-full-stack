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

exports.goal_create_get = function (req, res, next) {
    res.render("create", { title: "New Goal" });
}

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

exports.delete_goal = function (req, res, next) {
    goals.findByIdAndRemove(req.params.id, function deleteGoal(err) {
        if (err) {
            return next(err);
        }
        res.redirect("/");
    });
}



// const async = require("async");

// Count number of goals in DB

// exports.goals_count = function (req, res, next) {
//     goals.countDocuments({}, function (err, count) {
//         if (err) {
//             return next(err);
//         }
//         res.send(`There are ${count} goals in the database.`);
//     });
// };

