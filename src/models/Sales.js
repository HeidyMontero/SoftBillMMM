const {Schema , model }= require('mongoose');

const saleSchema = new Schema({

    name:{

        type:String,
        required:true,    // Nombre Usuario
        trim:true,
    },
    identification:{

        type:String,
        required:true,  //Identificacion
        trim:true,
        unique:true //Unico
    },
    
    date:{

        type:Date,
        default:Date.now  //Fecha

    },

    product:{

        type:String,
        required:true,  //Producto
        trim:true
        

    },

    amount: {

        type:String,
        required:true,  //Cantidad
        trim:true
        

    },

    unitValue:{

        type:String,
        required:true,  //ValorUND
        trim:true
    },

    totalValue:{

        type:String,
        required:true,  //ValorTotal
        trim:true
    },

    stateSale:{

        type:String,
        required:true,  //Estado de venta
        trim:true //Ordenar 
    },


},{

   timestamps:true //Feha de creacion y actualizacion


})

module.exports = model('Sale',saleSchema);