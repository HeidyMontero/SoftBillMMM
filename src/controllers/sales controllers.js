const salesCtrl ={};
const Sale = require('../models/Sales'); //Importa modelo

salesCtrl.getSales= async(req,res)=> {
     const sales = await Sale.find();  //Arreglo de todas las ventas
     res.json(sales);
}


salesCtrl.postSale = async (req,res) => {

     const {name,identification,date,product,amount, unitValue,totalValue,stateSale}= req.body;
     const newSale = new Sale({

         name:name,
         identification:identification,
         date:date,
         product:product,
         amount:amount,
         unitValue:unitValue,
         totalValue:totalValue,
         stateSale:stateSale
     });
     await newSale.save();
     res.json({message:'Sale saved'})
    
};

//Metodos con ID

salesCtrl.getSale= async (req,res)=> {
  const sale = await Sale.findById(req.params.id);
  res.json(sale);
}

salesCtrl.deleteSale= async (req,res)=>{
     await Sale.findByIdAndDelete(req.params.id);
     res.json({message:'Deleted Sale with Id'})
}

salesCtrl.putSale = async (req,res)=> {
    const {name,identification,date,product,amount, unitValue,totalValue,stateSale} = req.body;
     await Sale.findByIdAndUpdate(req.params.id,{
        name:name,
        identification:identification,
        date:date,
        product:product,
        amount:amount,
        unitValue:unitValue,
        totalValue:totalValue,
        stateSale:stateSale
       
    });
    res.json({message:' Updated Sale'})
}

module.exports=salesCtrl;