const { Product, Category } = require('../models/index.js');

const ProductController = {
    create: async (req, res) => {
        try {
            const product = await Product.create(req.body);
            res.status(201).send({ message: 'Producto creado con éxito', product });
        } catch (err) {
            console.error(err);
            res.status(500).send('Error interno del servidor');
        }
    },
    async update(req, res) {
        try {
          await Product.update(req.body,
            {
              where: {
                id: req.params.id,
              },
            }
          );
          res.send("Producto actualizado con éxito");
        } catch (err) {
          console.error(err);
          res.status(500).send({ msg: 'Error interno del servidor', err });
        }
      },
      async delete(req, res) {
        try {
            await Product.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.send({ message: 'El producto ha sido eliminado'})
        }
         catch (error) {
            console.error(err);
            res.status(500).send({ msg: 'Error interno del servidor', err });
        }
    },
    async getAll(req, res) {
        try {
          
          // const products = await Product.findAll();
          const products = await Product.findAll({
            include:[{ model: Category,attributes:["name"], through: { attributes: [] } }]
          });
          res.send(products);
        } catch (error) {
          console.error(error);
        }
      },
    
};

module.exports = ProductController;

