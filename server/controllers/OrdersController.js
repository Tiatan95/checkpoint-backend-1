const OrderModel = require("../models/OrdersModel");

module.exports.list = function list (req, res) {
    OrderModel.find({}).exec()
    .then(orders => {
        return res.json(orders);
    });
}

module.exports.create = function create(req, res) {
    const newOrder = new OrderModel(req.body);
    newOrder.save();
}
