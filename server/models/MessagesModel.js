let mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    date : {
        type : String,
        
    },
    message : {
        type : String,
        
    }

})

module.exports = mongoose.model("Message",schema);