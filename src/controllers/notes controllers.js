const notesCtrl ={};
const Note = require('../models/Note');

notesCtrl.getNotes= async(req,res)=> {
     const notes = await Note.find(); //Arreglo de todas las notas
     res.json(notes)
}


notesCtrl.postNote = async (req,res) => {

     const {title,content,date,author}= req.body;
     const newNote = new Note({

         title:title,
         content:content,
         date:date,
         author:author

     })
     await newNote.save();
     res.json({message:'Notes saved'})
    
};

//Metodos con ID
notesCtrl.getNote= async (req,res)=> {
const note = await Note.findById(req.params.id);
res.json({title: 'Hola Usuario'})
}
notesCtrl.deleteNote= async (req,res)=>{
     await Note.findByIdAndDelete(req.params.id);
     res.json({message:'Deleted Note'})
}

notesCtrl.putNote= async (req,res)=> {
    const {title,content,author} = req.body;
     await Note.findByIdAndUpdate(req.params.id,{
       title,
       content,
       author
    });
    res.json({message:' Updated Note'})
}

module.exports=notesCtrl;