import React, { Component } from 'react'
import axios from 'axios' //Permite obtener, eliminar, etc... Libreria 
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table,Button,Container,Modal,ModalBody,ModalHeader,FormalGroup,ModalFooter}from 'reactstrap'
import {Link} from 'react-router-dom'

export default class SalesList extends Component {
    
    state={

        sales:[]
    }
  
    async componentDidMount(){
        
        this.getSale();
     

    }
     async getSale(){
        const res = await axios.get('http://localhost:4000/api/sales');
        this.setState({sales: res.data})
    }


    deleteSale=async (id) =>{
       await axios.delete('http://localhost:4000/api/sales/'+id);
       this.getSale();
    }

    render() {
        return (
            <Container>
                <Table>
                    <thead>
                       <tr>
                          <th>Nombre vendedor</th>
                          <th>Identificacion</th>
                          <th>Date </th>
                          <th>Producto</th>
                          <th>Cantidad</th>
                          <th>Valor unidad</th>
                          <th>ValorTotal</th>
                          <th>Estado venta</th>
                       </tr>
                    </thead>
                    <tbody>
                        { this.state.sales.map(sale =>(
                            
                                <tr key={sale._id} valign="middle">
                                   <td>{sale.name}</td>
                                   <td>{sale.identification}</td>
                                   <td>{sale.date}</td>
                                   <td>{sale.product}</td>
                                   <td>{sale.amount}</td>
                                   <td>{sale.unitValue}</td>
                                   <td>{sale.totalValue}</td>
                                   <td>{sale.stateSale}</td>
                                   

                                   

                                   <td > 
                                     <ModalFooter>
                                       <Link className="btn btn-primary" to={"/editt/"+ sale._id }>
                                        Editar
                                       </Link>
                                       <Button color="danger" onClick={()=>this.deleteSale(sale._id)}>Eliminar</Button>
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
