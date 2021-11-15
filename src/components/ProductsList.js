import React, { Component } from 'react'
import axios from 'axios' //Permite obtener, eliminar, etc... Libreria 
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table,Button,Container,Modal,ModalBody,ModalHeader,FormalGroup,ModalFooter}from 'reactstrap'
import {Link} from 'react-router-dom'

export default class ProductsList extends Component {
    state={
        products:[]
    }
  
    async componentDidMount(){
        
        this.getProduct();
     

    }
     async getProduct(){
        const res = await axios.get('http://localhost:4000/api/products');
        this.setState({products: res.data})
    }


    deleteProduct=async (id) =>{
       await axios.delete('http://localhost:4000/api/products/'+id);
       this.getProduct();
    }

    
    


    render() {
        return (
            <Container>
                <Table>
                    <thead>
                       <tr>
                          <th>Producto</th>
                          <th>Descripcion</th>
                          <th>Valor Unidad </th>
                          <th>Estado</th>
                       </tr>
                    </thead>
                    <tbody>
                        { this.state.products.map(product =>(
                                <tr key={product._id} valign="middle">
                                   <td>{product.nameProduct}</td>
                                   <td>{product.description}</td>
                                   <td>{product.unitValue}</td>
                                   <td>{product.stateProduct}</td>
                                   <td > 
                                     <ModalFooter>
                                       <Link className="btn btn-primary" to={"/edit/"+ product._id }>
                                        Editar
                                       </Link>
                                       <Button color="danger" onClick={()=>this.deleteProduct(product._id)}>Eliminar</Button>
                                     </ModalFooter>
                                   </td>
                                </tr> 

                            ) )
                        }

                   </tbody>
               </Table>
            </Container>
        )
    }
}
