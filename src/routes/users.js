const{Router }= require('express');
const router = Router();
const {getUsers,postUser,deleteUser,getUser,putUser } = require('../controllers/users controllers');


router.route('/')
    .get(getUsers)
    .post(postUser);
    
router.route('/:id')

  .delete(deleteUser)
  .put(putUser)//Update
  .get(getUser)

module.exports = router;