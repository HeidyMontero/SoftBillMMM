const{Router }= require('express');
const router = Router();

const {getSales,postSale,getSale,deleteSale,putSale} = require('../controllers/sales controllers');


router.route('/')
    .get(getSales)
    .post(postSale);
    
router.route('/:id')

  .delete(deleteSale)
  .put(putSale)//Update
  .get(getSale)

module.exports = router;