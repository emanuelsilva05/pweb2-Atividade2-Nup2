const router = require('express').Router();
const authMiddleware = require('../middlewares/auth'); // Importa o middleware de autenticação

// Controller imports
const { categoryController, productController, authController } = require('../controllers');

// Rotas públicas (exemplo: autenticação)
router.post('/v1/auth/login', authController.login);
router.post('/v1/auth/signup', authController.signup);

// Rotas protegidas para categorias
router.get('/v1/categories', authMiddleware,categoryController.getAllCategories); 
router.get('/v1/categories/:id', authMiddleware, categoryController.getCategoryById); 
router.post('/v1/categories', authMiddleware, categoryController.createCategory);
router.put('/v1/categories/:id', authMiddleware, categoryController.updateCategory);
router.delete('/v1/categories/:id', authMiddleware, categoryController.deleteCategory);

// Rotas protegidas para produtos
router.get('/v1/products', authMiddleware, productController.getAllProducts);
router.get('/v1/products/:id', authMiddleware, productController.getProductById);
router.post('/v1/products', authMiddleware, productController.createProduct);
router.put('/v1/products/:id', authMiddleware, productController.updateProductById);
router.delete('/v1/products/:id', authMiddleware, productController.deleteProductById);

module.exports = router;
