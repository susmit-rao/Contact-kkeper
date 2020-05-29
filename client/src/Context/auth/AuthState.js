import React,{useReducer} from 'react';
import { v4 as uuid} from 'uuid';
import AuthContext from './AuthContext'
import AuthReducer from './AuthReducer'
import setAuthToken from '../../util/setAuthToken'
import axios from 'axios'
import {
REGISTER_SUCCESS,
REGISTER_FAIL,
USER_LOADED,
AUTH_ERROR,
LOGIN_SUCCESS,
LOGIN_FAIL,
LOGOUT,
CLEAR_ERRORS
} from '../types'

const AuthState = (props) => {
    const initialState={
        token:localStorage.getItem('token'),
        isAuthenticated:null,
        user:null,
        loading:true,
        error:null
        
    };

    const [state,dispatch]=useReducer(AuthReducer,initialState);
    //

    const register = async formdata  =>{
        const config ={
            headers:{
                'Content-Type':'application/json'
            }
        }

        try {
            const res=  await axios.post('/api/users',formdata,config);
            dispatch({type:REGISTER_SUCCESS,payload:res.data});
            loadUser();
            
        } catch (err) {
            dispatch({type:REGISTER_FAIL,payload:err.response.data.msg}) 
        }
    }
    const clearErrors =()=>{
        dispatch({type:CLEAR_ERRORS})
    }

    const loadUser = async ()=>{
        //add token
        if (localStorage.token){
            setAuthToken(localStorage.token)
        }
        try {
            const res= await axios.get('/api/auth');
            dispatch({type:USER_LOADED,paylaod:res.data})
            
        } catch (error) {
            dispatch({type:AUTH_ERROR}) 
            
        }
        
    }
    









    //



    return (
    <AuthContext.Provider
    value={{
        token:state.token,
        isAuthenticated:state.isAuthenticated,
        user:state.user,
        error:state.error,
        loading:state.loading,
        register,
        clearErrors,
        loadUser
        
        
        
    }}>

    
        {props.children}

        </AuthContext.Provider>

    );


};

export default AuthState
