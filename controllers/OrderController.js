const { Order } = require('../models/index');

const OrderController = {
    async create (req, res) {
        try {
            console.log("order", req.body);
            const order = await Order.create(req.body);
            order.addProduct(req.body.ProductId)
            res.status(201).send({ msg: 'Pedido realizado con éxito', order });
        } catch (err) {
            console.error(err);
            res.status(500).send({ msg: 'Error interno del servidor', err });
        }
    },
    async getAll(req, res) {
        try {
          
          const orders = await Order.findAll({
            include:[{ model: Product,attributes:["name"], through: { attributes: [] } }]
          });
          res.send(orders);
        } catch (error) {
          console.error(error);
          res.status(500).send({ msg: 'Error interno del servidor', err });
        }
      },
};

module.exports = OrderController;
