import{render} from 'react-dom';
import {BrowserRouter, BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import Navigation from './components/Navigation';
import ProductsList from './components/ProductsList'; //Rutas
import ProductsForm from './components/ProductsForm';
import SalesList from './components/SalesList';
import SalesForm from './components/SalesForm';
import Users from './components/Users';
import UsersList from './components/UsersList';
import Login from './components/Login';
import Profile from './components/Profile';
import Logoutt from './components/Logoutt';


function App() {

  const {isAuthenticated,isLoading}=useAuth0()

  if(isLoading) return <h2>Loding</h2>

  return (
  
      <Router>
        <center><Navigation/></center>

        {isAuthenticated ? <center> <Logoutt/> </center> : <center> <Login/> </center>}
        <center><Profile/></center>
           
        
          <div className="container p-5">

            
            <Route path="/ProductsForm" component={ProductsForm} />
            <Route path="/ProductsList"  exact component={ProductsList} />
            <Route path="/edit/:id" component={ProductsForm} />
            <Route path="/SalesForm" component={SalesForm} />
            <Route path="/SalesList"  exact component={SalesList} />
            <Route path="/editt/:id" component={SalesForm} />
            <Route path="/Users" component={Users} />
            <Route path="/UsersList" component={UsersList} />
            <Route path="/edittt/:id" component={Users}/>
            

          </div>
        
          <center>
            <img src="img\Logo.jpg" alt="Logo.SoftBill"></img >
          </center>
          
      </Router>


    
    
    

  );
}

export default App;
