const{Router }= require('express');
const router = Router();

const {getProducts,postProduct,getProduct,deleteProduct,putProduct} = require('../controllers/products controllers');


router.route('/')
    .get(getProducts)
    .post(postProduct);
    
router.route('/:id')

  .delete(deleteProduct)
  .put(putProduct)//Update
  .get(getProduct)

module.exports = router;