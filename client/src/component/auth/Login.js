import React,{useState,useEffect,useContext} from 'react'
import AuthContext from "../../Context/auth/AuthContext"
import AlertContext from "../../Context/Alert/AlertContext"

export const Login = (props) => {
    const [user,setUser]=useState({
        email:"",
        password:"",
        });

    const {email,password}=user;
    const alertContext = useContext(AlertContext);
    const {setAlert}= alertContext;
    const authContext = useContext(AuthContext);
    const{login,error,isAuthenticated,clearErrors}=authContext;
 
    useEffect(() => {
        if(isAuthenticated){
            props.history.push('/');

        }
        if(error==='Invalid credentials'){
            setAlert(error,'danger');
            clearErrors();
        }
        // eslint-disable-next-line
    }, [error,isAuthenticated,props.history])

    const onChange =(e) =>{
        setUser({...user,[e.target.name]:e.target.value});
    }

    const onSubmit =(e) =>{
        e.preventDefault();
        if (email===""||password===""){
            setAlert('Please set all fields ','danger')
        }else{
            login({
                email,
                password
            });
        }
    }


    return (
        <div className="form-container">
            <h1>
                Account <span className="text-primary">Login</span>
            </h1>
            <form onSubmit={onSubmit}>
                
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} onChange={onChange} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" value={password} onChange={onChange} required/>
                </div>
                
                <input type="submit" value="Login" className="btn btn-primary btn-block"/>
            </form>
            
        </div>
    )
}

export default Login
