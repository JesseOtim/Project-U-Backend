import express from 'express';
import ProductController from '../controllers/productController';
import AuthController from '../controllers/authController';
// import { 
//     Authenticate, 
//     verifyAdmin 
// } from '../middlewares/middleware';

// defining middleware routes
const router = express.Router();

// Users routes
router.post('/api/auth/signup', AuthController.signup);
router.post('/api/auth/login', AuthController.login);

// Products routes
router.post('/api/auth/products/', ProductController.addProduct);
router.get('/api/auth/products/', ProductController.getAllProducts);
router.get('/api/auth/products/:id', ProductController.getOneProduct); 
router.put('/api/auth/products/:id', ProductController.updateProduct);
router.delete('/api/auth/products/:id', ProductController.deleteProduct);

export default router;