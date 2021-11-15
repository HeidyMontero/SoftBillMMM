const {Schema , model }= require('mongoose');

const productSchema = new Schema({

    nameProduct:{

        type:String,
        required:true,    // Nombre producto
        trim:true,
    },
    description:{

        type:String,
        required:true,  //Descripcion
        trim:true,
        
    },
    
    unitValue:{

        type:String,
        required:true,  //Valor UND
        trim:true,

    },

    stateProduct:{

        type:String,
        required:true,  //Estado del producto
        trim:true //Ordenar espacios
    },


},{

   timestamps:true //Feha de creacion y actualizacion


})

module.exports = model('Product',productSchema);