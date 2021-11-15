const {Schema , model }= require('mongoose');

const userSchema = new Schema({
    
    rol:{
        
       type:String,
       requited:true,
       trim:true,
       

    },
    userE:{
        type:String,
        requited:true,
        trim:true,
    },
    name:{
        type:String,
        requited:true,
        trim:true,
    }

},  {
    
    timestamps:true   

});

module.exports = model('User',userSchema);