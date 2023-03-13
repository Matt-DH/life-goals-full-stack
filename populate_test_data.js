const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./models/User");
const LifeGoal = require("./models/LifeGoal");
const dotenv = require("dotenv");
dotenv.config();

// Connect to the MongoDB database
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log("Connected to the MongoDB database"))
  .catch(error => console.error("Error connecting to the MongoDB database:", error));

// Create some dummy users and life goals
async function seed() {
  // Create some dummy users
  const user1 = await User.create({
    username: "john_doe",
    email: "john_doe@example.com",
    password: await bcrypt.hash("password123", 10)
  });

  const user2 = await User.create({
    username: "jane_doe",
    email: "jane_doe@example.com",
    password: await bcrypt.hash("password456", 10)
  });

  // Create some dummy life goals for user1
  const goal1 = await LifeGoal.create({
    user_id: user1._id,
    goal: "Learn a new language",
    description: "Learn French and be able to hold a conversation by the end of the year",
    due_date: new Date("2023-12-31"),
    is_completed: false
  });

  const goal2 = await LifeGoal.create({
    user_id: user1._id,
    goal: "Travel to Japan",
    description: "Visit Tokyo and Kyoto and experience Japanese culture and cuisine",
    due_date: new Date("2025-12-31"),
    is_completed: false
  });

  // Create some dummy life goals for user2
  const goal3 = await LifeGoal.create({
    user_id: user2._id,
    goal: "Save money for a down payment on a house",
    description: "Save $50,000 over the next 5 years to buy a house",
    due_date: new Date("2027-12-31"),
    is_completed: false
  });

  const goal4 = await LifeGoal.create({
    user_id: user2._id,
    goal: "Run a marathon",
    description: "Train for and complete a full marathon within the next 2 years",
    due_date: new Date("2024-12-31"),
    is_completed: false
  });

  console.log("Dummy data seeded successfully!");
  process.exit();
}

// Call the seed function to populate the database with dummy data
seed();
