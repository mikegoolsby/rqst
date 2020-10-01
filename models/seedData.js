const mongoose = require('mongoose');

require("dotenv").config();
const { MONGODB_URI, DB_NAME } = process.env;

mongoose.connect(`${MONGODB_URI}${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
    console.log("connected to MongoDB")
})

const Request = require('./request')

const seedRequests = [
    {
        name: 'Mike Frank',
        date: 10/29/2020,
        bucket: 155,
        note: 'will switch with someone for another weekend'
    }
]

// Request.create(seedRequests, (err, data) => {
//     console.log(data)
// })