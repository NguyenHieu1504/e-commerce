import express from 'express';
import {
  createProduct,
  createReviewProduct,
  deleteProduct,
  deleteReviewProduct,
  getAllProduct,
  getProductById,
  updateProduct,
  updateReviewProduct,
  sortAllProduct,
  filterProduct,
  searchProduct,
} from '../Controller/ProductController.js';
import { protect } from '../Middleware/Auth.js';
import sellerMiddleware from '../Middleware/sellerMiddleware.js';
import adminMiddleware from '../Middleware/AdminMiddleware.js';
import { deleteUser } from '../Controller/UserController.js';

const router = express.Router();
/* const sellerAdminRole = sellerMiddleware || adminMiddleware; */

router.post('/createProduct', protect, sellerMiddleware, createProduct);
router.put('/:id/updateProduct', protect, sellerMiddleware, updateProduct);
router.delete('/:id/deleteProduct', protect, sellerMiddleware, deleteProduct);

router.get('/sortAll', protect, sortAllProduct);
router.get('/filter', protect, filterProduct);
router.get('/search', protect, searchProduct);

router.get('/getAllProducts', protect, getAllProduct);
router.get('/:id/getProductById', getProductById);

router.post('/:id/reviews', protect, createReviewProduct);
router.put('/:id/updateReviews', protect, updateReviewProduct);
router.delete('/:id/deleteReviews/:reviewId', protect, deleteReviewProduct);

// API SELLER
/* router.get('/:id/showAllProducts', protect, showAllProductsSeller); */
export default router;
