const { Schema, model } = require("mongoose");

// User Schema
const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isManager: { type: Boolean, required: true}
});

// Create model
const User = model("user" , userSchema);

// Export model
module.exports = User
