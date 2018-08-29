const MessageModel = require("../models/MessagesModel");

module.exports.list = function list(req,res) {
    MessageModel.find({}).exec()
    .then(messages => {
        return res.json(messages);
    });
}

module.exports.create = function create(req,res) {
    const newMessage = new MessageModel(req.body);
    newMessage.save();
    MessageModel.find({}).exec()
    .then( messages => {
        return res.send(messages);
    })
}