const mongoose = require('mongoose');

// Request Schema
const rqstSchema = new mongoose.Schema({
    name: {type: String, required: true},
    date: {type: Date, required: true},
    bucket: {type: Number, required: true},
    note: {type: String, required: false}
});

// Create model
const Request = mongoose.model('Request', rqstSchema);

// Export model
module.exports = Request