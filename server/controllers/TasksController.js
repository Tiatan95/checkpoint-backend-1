const TaskModel = require("../models/TasksModel");

module.exports.list = function list(req,res) {
    TaskModel.find({}).exec()
    .then(tasks =>{
        return res.send(tasks);
    });
}

module.exports.create = function create(req, res) {
    const newTask = new TaskModel(req.body);
    newTask.save();
    TaskModel.find({}).exec()
    .then(tasks => {
        return res.send(tasks);
    })
} 