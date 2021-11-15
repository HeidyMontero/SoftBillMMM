import React, { Component } from 'react'
import axios from 'axios'

export default class Users extends Component {

    state= {

        rol:'',
        userE:'',
        name:'',
        editing:false,
        _id:''
    }

    async componentDidMount(){
      const res = await axios.get('http://localhost:4000/api/users');

      if(this.props.match.params.id){
         const res=await axios.get('http://localhost:4000/api/users/'+ this.props.match.params.id);
         
         this.setState({
           rol:res.data.rol,
           userE:res.data.userE,
           name:res.data.name,
           editing: true,
          _id:this.props.match.params.id

        })
      }
    }

    
    onSubmit= async (e)=> {
        e.preventDefault();
        const newUser= {

          rol: this.state.rol,
          userE:this.state.userE,
          name:this.state.name,
        
        };

        if(this.state.editing){
          await axios.put('http://localhost:4000/api/users/'+ this.state._id, newUser);
        }else{
          await axios.post('http://localhost:4000/api/users', newUser);

        }
        window.location.href='/UsersList';
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
                  <h4> Registrar Usuario</h4>
                  {/*Ingreso de rol(Administardor/Vendedor)*/}
                  <div className="form-group">
                    <input type="text" 
                    className="form-control" 
                    placeholder="Rol del Usuario"
                    name="rol"
                    onChange={this.onInputChange}
                    value={this.state.rol} 
                    required/>
                  </div>
                  {/*Ingreso Estado Usuario*/}
                  <div className="form-group">
                      <textarea 
                        name="userE"
                        className="form-control"
                        placeholder="Estado del Usuario"
                        onChange={this.onInputChange} 
                        value={this.state.userE}
                        required/>
                  </div>
                  {/*Ingreso nombre usuario*/}
                  <div className="form-group">
                      <input type="text" 
                       className="form-control" 
                       placeholder="Nombre del usuario"
                       name="name"
                       onChange={this.onInputChange} 
                       value={this.state.name} 
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
