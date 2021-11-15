import {useAuth0} from '@auth0/auth0-react'

const Login = () => {
    const {loginWithRedirect}=useAuth0();
    return (
     <button className="btn btn-primary"onClick={()=>loginWithRedirect()}>Iniciar sesion</button>
    )
}

export default Login

