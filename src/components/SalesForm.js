import React, { Component } from 'react'
import axios from 'axios'

export default class SalesForm extends Component {

    state={
     
        name:'',
        identification:'',
        date:'',
        product:'',
        amount:'',
        unitValue:'',
        totalValue:'',
        stateSale:'',
        editing:false,
        _id:''
        

    }

    async componentDidMount(){

      const res = await axios.get('http://localhost:4000/api/sales');

      if(this.props.match.params.id){

         const res=await axios.get('http://localhost:4000/api/sales/'+this.props.match.params.id);
         
         this.setState({
            name:res.data.name,
            identification:res.data.identification,
            date:res.data.date,
            product:res.data.product,
            amount:res.data.amount,
            unitValue:res.data.unitValue,
            totalValue:res.data.totalValue,
            stateSale:res.data.stateSale,
            editing: true,
           _id:this.props.match.params.id

        })
        
     }

  }

    
    onSubmit= async (e)=> {
      e.preventDefault();
      const newSale= {
         name:this.state.name,
         identification: this.state.identification,
         date:this.state.date,
         product:this.state.product,
         amount:this.state.amount,
         unitValue:this.state.unitValue,
         totalValue:this.state.totalValue,
         stateSale:this.state.stateSale
      };

        if(this.state.editing){
          await axios.put('http://localhost:4000/api/sales/'+ this.state._id,newSale);
        }else{
          await axios.post('http://localhost:4000/api/sales', newSale);
        }
        window.location.href='/SalesList';
    }
    
    onInputChange = e =>{
      this.setState({
        [e.target.name]:e.target.value
      })


    }

    render() {
        return (
           <div className="col-md-6 offset-md-3">

              <div className = "card-container text-center">
                  <h4> Registrar Venta</h4>
                  {/*Nombre del Vendedor*/}
                  <div className="form-group">
                    <input type="text" 
                    className="form-control" 
                    placeholder="Nombre"
                    name="name"
                    onChange={this.onInputChange}
                    value={this.state.name} 
                    required/>
                  </div>
                  {/*Identificacion*/}
                  <div className="form-group">
                      <textarea 
                        name="identification"
                        className="form-control"
                        placeholder="Identificacion"
                        onChange={this.onInputChange} 
                        value={this.state.identification}
                        required/>
                  </div>
                  {/*Date*/}
                  <div className="form-group">
                      <input type="text" 
                       className="form-control" 
                       placeholder="Fecha"
                       name="date"
                       onChange={this.onInputChange} 
                       value={this.state.date} 
                       required/>
                  </div>
                  {/*Ingreso del producto*/}
                  <div className="form-group">
                      <input type="text" 
                       className="form-control" 
                       placeholder="Producto"
                       name="product"
                       onChange={this.onInputChange} 
                       value={this.state.product} 
                       required/>
                  </div>
                  {/*Ingreso cantidad*/}
                  <div className="form-group">
                      <input type="text" 
                       className="form-control" 
                       placeholder="Cantidad"
                       name="amount"
                       onChange={this.onInputChange} 
                       value={this.state.amount} 
                       required/>
                  </div>
                   {/*Ingreso valor und*/}
                   <div className="form-group">
                      <input type="text" 
                       className="form-control" 
                       placeholder="Valor unidad"
                       name="unitValue"
                       onChange={this.onInputChange} 
                       value={this.state.unitValue} 
                       required/>
                  </div>
                   {/*Ingreso valor total*/}
                   <div className="form-group">
                      <input type="text" 
                       className="form-control" 
                       placeholder="Valor total"
                       name="totalValue"
                       onChange={this.onInputChange} 
                       value={this.state.totalValue} 
                       required/>
                  </div>
                   {/*Ingreso cantidad*/}
                   <div className="form-group">
                      <input type="text" 
                       className="form-control" 
                       placeholder="Estado de la venta"
                       name="stateSale"
                       onChange={this.onInputChange} 
                       value={this.state.stateSale} 
                       required/>
                  </div>
                  <form onSubmit={this.onSubmit}> 
                    <div className="row">
                      <button type="submit" className="btn btn-primary">
                          Registrar
                      </button> 
                    </div>

                  </form>
              </div> 
        </div>
        )
    } 
}

