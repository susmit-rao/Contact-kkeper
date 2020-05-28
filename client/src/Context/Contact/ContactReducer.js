import {ADD_Contact,
    DELETE_Contact,
    SET_Current,
    CLEAR_Current,
    UPDATE_Contact,
    FILTER_Contacts,
    CLEAR_Filter} from '../types'



export default(state,action) =>{
    switch(action.type){
        case ADD_Contact:{
            return{
                ...state,
                contacts:[...state.contacts,action.payload]
            }
        }
        
        case DELETE_Contact:{
            return{
                ...state,
                contacts: state.contacts.filter(contact => contact.id!==action.payload)
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
                contacts:state.contacts.map(contact =>contact.id===action.payload.id ? action.payload:contact)
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

        default:
            return state
    }

}