import React from 'react'
import{logout, useAuth0} from '@auth0/auth0-react'

const Logoutt = () => {
    const{logout}=useAuth0()
    return (
        <button className="btn btn-primary" onClick={()=>logout()}>Cerrar sesion</button>
        
    )
}

export default Logoutt
