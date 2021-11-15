import React, { Component } from 'react'
import axios from 'axios'

export default class ProductsForm extends Component {

    state= {
     
        nameProduct:'',
        description:'',
        unitValue:'',
        stateProduct:'',
        editing:false,
        _id:''
        

    }

    async componentDidMount(){
      const res = await axios.get('http://localhost:4000/api/products');

      if(this.props.match.params.id){
         const res=await axios.get('http://localhost:4000/api/products/'+this.props.match.params.id);
         
         this.setState({

           nameProduct:res.data.nameProduct,
           description:res.data.description,
           unitValue:res.data.unitValue,
           stateProduct:res.data.stateProduct,
           editing: true,
          _id:this.props.match.params.id

        })
      }
    }

    
    onSubmit= async (e)=> {
        e.preventDefault();
        const newProduct= {
          nameProduct: this.state.nameProduct,
          description:this.state.description,
          unitValue:this.state.unitValue,
          stateProduct:this.state.stateProduct
        };

        if(this.state.editing){
          await axios.put('http://localhost:4000/api/products/'+ this.state._id,newProduct);
        }else{
          await axios.post('http://localhost:4000/api/products', newProduct);

        }
        window.location.href='/ProductsList';
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
                  <h4> Registrar Producto</h4>
                  {/*Ingreso de producto*/}
                  <div className="form-group">
                    <input type="text" 
                    className="form-control" 
                    placeholder="Nombre del producto"
                    name="nameProduct"
                    onChange={this.onInputChange}
                    value={this.state.nameProduct} 
                    required/>
                  </div>
                  {/*Ingreso de descripcion*/}
                  <div className="form-group">
                      <textarea 
                        name="description"
                        className="form-control"
                        placeholder="Descripcion del producto"
                        onChange={this.onInputChange} 
                        value={this.state.description}
                        required/>
                  </div>
                  {/*Ingreso de valor Und*/}
                  <div className="form-group">
                      <input type="text" 
                       className="form-control" 
                       placeholder="Valor unitario"
                       name="unitValue"
                       onChange={this.onInputChange} 
                       value={this.state.unitValue} 
                       required/>
                  </div>
                  {/*Ingreso del estado del producto*/}
                  <div className="form-group">
                      <input type="text" 
                       className="form-control" 
                       placeholder="Estado"
                       name="stateProduct"
                       onChange={this.onInputChange} 
                       value={this.state.stateProduct} 
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

