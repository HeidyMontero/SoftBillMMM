import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
         <div className="container-fluid">
           <div className="center">
             <Link className="navbar-brand" to="/" > 
             SoftBill
             </Link>
            </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup" >
            <div className="navbar-nav  " >
              
             <Link className="nav-link" to="ProductsList" >Listar productos</Link>
             <Link className="nav-link" to="ProductsForm"> Registrar productos</Link>
             <Link className="nav-link" to="SalesList">Listar ventas</Link>
             <Link className="nav-link" to="SalesForm"> Registrar ventas</Link>
             <Link className="nav-link" to="Users"> Usuarios</Link>
             <Link className="nav-link" to="UsersList"> Listar Usuarios</Link>
              
            </div>  
          </div>
        </div>
      </div>
      </nav>
            
      
    );
  }
}
