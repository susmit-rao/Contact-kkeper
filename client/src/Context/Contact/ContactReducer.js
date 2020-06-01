import {ADD_Contact,
    DELETE_Contact,
    SET_Current,
    CLEAR_Current,
    UPDATE_Contact,
    FILTER_Contacts,
    CLEAR_Filter,
    CONTACT_ERROR,
    GET_Contacts,
    CLEAR_Contacts} from '../types'



export default(state,action) =>{
    switch(action.type){
        case ADD_Contact:{
            return{
                ...state,
                contacts:[action.payload,...state.contacts],
                loading:false

            }
        }
        case GET_Contacts:{
            return{
                ...state,
                contacts:action.payload,
                loading:false
            }
        }
        case CLEAR_Contacts:{
            return{
                ...state,
                contacts:null,
                filter:null,
                error:null
            }
        }


        
        case DELETE_Contact:{
            return{
                ...state,
                contacts: state.contacts.filter(contact => contact._id!==action.payload),
                loading:false

            }
        }

        case SET_Current:{
            return{
                ...state,
                current:action.payload
            }
        }
        case CLEAR_Current:{
            return{
                ...state,
                current:null
            }
        }

        case UPDATE_Contact:{
            return{
                ...state,
                contacts:state.contacts.map(contact =>contact._id===action.payload._id ? action.payload:contact),
                loading:false

            }
        }

        case FILTER_Contacts:{
            return{
                ...state,
                filter:state.contacts.filter(contact =>{
                    const regex = new RegExp(`${action.payload}`,'gi');
                     return contact.name.match(regex) || contact.email.match(regex); 

                } 
             )
            }
        }
        case CLEAR_Filter:{
            return{
                ...state,
                filter:null
            }
        }

        case CONTACT_ERROR:{
            return{
                ...state,
                error:action.payload
            }
        }

        default:
            return state
    }

}