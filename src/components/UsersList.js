import React, { Component } from 'react'
import axios from 'axios' //Permite obtener, eliminar, etc... Libreria 
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table,Button,Container,Modal,ModalBody,ModalHeader,FormalGroup,ModalFooter}from 'reactstrap'
import {Link} from 'react-router-dom'

export default class UsersList extends Component {
    state={
        users:[]
    }
  
    async componentDidMount(){
        
        this.getUser();
     
    }

    async getUser(){
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({users:res.data})
    }


    deleteUser=async (id) =>{
       await axios.delete('http://localhost:4000/api/users/'+id);
       this.getUser();
    }


    render() {
        return (
            <Container>
                <Table>
                    <thead>
                       <tr>
                          <th>Rol</th>
                          <th>Estado usuario</th>
                          <th>Nombre usuario </th>
                       </tr>
                    </thead>
                    <tbody>
                        { this.state.users.map(user =>(
                                <tr key={user._id} valign="middle">
                                   <td>{user.rol}</td>
                                   <td>{user.userE}</td>
                                   <td>{user.name}</td>
                                   <td> 
                                     <ModalFooter>
                                       <Link className="btn btn-primary" to={"/edittt/"+ user._id }>
                                        Editar
                                       </Link>
                                       <Button color="danger" onClick={()=>this.deleteUser(user._id)}>Eliminar</Button>
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