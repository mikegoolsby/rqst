const mongoose = require('mongoose');

// Request Schema
const rqstSchema = new mongoose.Schema({
    username: { type: String, required: true},
    name: {type: String, required: true},
    date: {type: String, required: true},
    bucket: {type: Number, required: true},
    note: {type: String, required: false},
    pending: {type: Boolean, default: true}
});

// Create model
const Request = mongoose.model('Request', rqstSchema);

// Export model
module.exports = Request