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
    

    
    export default(state,action) =>{
        switch(action.type){
            case USER_LOADED:{
                
                return{
                    ...state,
                    isAuthenticated:true,
                    loading:false,
                    user:action.payload

                }
            }
            case REGISTER_SUCCESS:{
                localStorage.setItem('token',action.payload.token);
                return{
                    ...state,
                    ...action.payload,
                    isAuthenticated:true,
                    loading:false

                };
            }
            case AUTH_ERROR:{
                localStorage.removeItem('token');
                return{
                    ...state,
                    token:null,
                    isAuthenticated:false,
                    loading:false,
                    user:null,
                    error:action.payload

                    
                }
            }


            

        
            case REGISTER_FAIL:{
                localStorage.removeItem('token');
                return{
                    ...state,
                    token:null,
                    isAuthenticated:false,
                    loading:false,
                    user:null,
                    error:action.payload

                    
                }
            }

            case CLEAR_ERRORS:{
                return{
                    ...state,
                    error:null
                };
                    
            }
    
            
            // case CLEAR_Current:{
            //     return{
            //         ...state,
            //         current:null
            //     }
            // }
    
            // case UPDATE_Contact:{
            //     return{
            //         ...state,
            //         contacts:state.contacts.map(contact =>contact.id===action.payload.id ? action.payload:contact)
            //     }
            // }
    
            // case FILTER_Contacts:{
            //     return{
            //         ...state,
            //         filter:state.contacts.filter(contact =>{
            //             const regex = new RegExp(`${action.payload}`,'gi');
            //              return contact.name.match(regex) || contact.email.match(regex); 
    
            //         } 
            //      )
            //     }
            // }
            // case CLEAR_Filter:{
            //     return{
            //         ...state,
            //         filter:null
            //     }
            // }
    
            default:
                return state
        }
    
    }    