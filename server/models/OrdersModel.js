let mongoose = require("mongoose")

const schema = new mongoose.Schema({
    amount : {
        type : String,
        required : true
    },
    orderDate : {
        type : String,
        required : true
    },
    orderTime : {
        type : String,
        required: true
    }
})

module.exports = mongoose.model("Order",schema);