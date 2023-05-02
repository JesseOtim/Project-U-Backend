import ProductModel from "../models/productModel";
// import cloudinary from '../cloudinary';


class ProductController {
  /**
   * Create A Product
   * @param {object} req
   * @param {object} res
   * @returns {object} Return status code 201 and Product object
   */
  static async addProduct(req, res) {
    try {
      const Product = await ProductModel.findOne({
        name: req.body.name,
      }).exec();
      if (Product) {
        return res.status(409).send({
          status: 409,
          message: "Product with that name already added",
        });
      }
      // const getImage = await cloudinary.uploads(req.body.productimage, 'Assets');
      // console.log(getImage)
      // req.body.productimage = getImage.url;
      
      // const data = new ProductModel(req.body);
      // await data.save();
      // return res.status(201).send({
      //   status: 201,
      //   message: "Product successfully added",
      //   data,
      // });
    } catch (error) {
      return res.status(400).send({
        status: 400,
        message: "Oops failed to add a Product",
        error,
      });
    }
  }

  /**
   * Get All Products
   * @param {object} req
   * @param {object} res
   * @returns {array} Return status code 200 and Products array
   */
  static async getAllProducts(req, res) {
    try {
      const data = await ProductModel.find({});
      return res.status(200).send({
        status: 200,
        message: "All available Products",
        data,
      });
    } catch (error) {
      return res.status(400).send({
        status: 400,
        message: "Oops failed to fetch Products",
        error,
      });
    }
  }

  /**
   * Get A Single Product
   * @param {object} req
   * @param {object} res
   * @returns {object} Return status code 200 and Product object
   */
  static async getOneProduct(req, res) {
    const data = await ProductModel.findById(req.params.id);
    try {
      if (data == null) {
        return res.status(200).send({
          status: 200,
          message: "Product with this name doesn't exist",
        });
      }
      return res.status(200).send({
        status: 200,
        message: "Product Details",
        data,
      });
    } catch (error) {
      return res.status(400).send({
        status: 400,
        message: "Oops failed to fetch all Products",
        error,
      });
    }
  }

  /**
   * Update A Product
   * @param {object} req
   * @param {object} res
   * @returns {object} Return status code 200 and Product object
   */
  static async updateProduct(req, res) {
    try {
      const data = req.body;
      await ProductModel.findOneAndUpdate(
        {
          _id: req.params.id,
        },
        data
      );
      return res.status(200).send({
        status: 200,
        message: "Product updated successfully",
        data,
      });
    } catch (error) {
      return res.status(400).send({
        status: 400,
        message: "Oops failed to update the Product",
        error,
      });
    }
  }

  /**
   * Delete A Product
   * @param {object} req
   * @param {object} res
   * @returns {void} return status code 200 and message
   */
  static async deleteProduct(req, res) {
    try {
      const Product = await ProductModel.findById(req.params.id);
      if (Product == null) {
        return res.status(200).send({
          status: 200,
          message: "Product with this name doesn't exist",
        });
      }
      await ProductModel.deleteOne(Product);
      return res.status(200).send({
        status: 200,
        message: "Product deleted successfully",
      });
    } catch (error) {
      return res.status(400).send({
        status: 400,
        message: "Oops failed to delete the Product",
        error,
      });
    }
  }
}

export default ProductController;
