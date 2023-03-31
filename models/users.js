const mongoose = require("mongoose");

// Define the schema for a user 
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

UserSchema.virtual("url").get(function () {
    // We don't use an arrow function as we'll need the this object
    return `/user/${this._id}`;
});

module.exports = mongoose.model("User", UserSchema);