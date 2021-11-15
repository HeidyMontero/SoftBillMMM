const{Router }= require('express');
const router = Router();

const {getNotes,postNote,getNote,deleteNote,putNote} = require('../controllers/notes controllers');


router.route('/')
    .get(getNotes)
    .post(postNote);
    
router.route('/:id')

  .delete(deleteNote)
  .put(putNote)//Update
  .get(getNote)

module.exports = router;