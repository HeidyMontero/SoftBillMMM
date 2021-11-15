const productsCtrl ={};
const Product = require('../models/Products'); //Importa modelo

productsCtrl.getProducts= async(req,res)=> {
     const products = await Product.find();  //Arreglo de todas las ventas
     res.json(products);
}


productsCtrl.postProduct = async (req,res) => {  //Guardar nuevos datos

     const {nameProduct,description,unitValue,stateProduct}= req.body;
     const newProduct = new Product({
        nameProduct:nameProduct,
        description:description,
        unitValue:unitValue,
        stateProduct:stateProduct
     });
     await newProduct.save();
     res.json({message:'Sale saved'})
    
};

//Metodos con ID

productsCtrl.getProduct= async (req,res)=> {
  const product = await Product.findById(req.params.id);
  res.json(product);
}

productsCtrl.deleteProduct= async (req,res)=>{
     await Product.findByIdAndDelete(req.params.id);
     res.json({message:'Deleted Sale with Id'})
}

productsCtrl.putProduct = async (req,res)=> {  //Editar
    const {nameProduct,description,unitValue,stateProduct} = req.body;
     await Product.findByIdAndUpdate(req.params.id,{

        nameProduct:nameProduct,
        description:description,
        unitValue:unitValue,
        stateProduct:stateProduct
       
    });
    res.json({message:' Updated Product'})
}

module.exports=productsCtrl;