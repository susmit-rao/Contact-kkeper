import React,{Fragment,useContext,useEffect} from 'react'
import ContactContext from '../../Context/Contact/ContactContext'
import AuthContext from '../../Context/auth/AuthContext'
import ContactItem from './ContactItem'
import Spinner from '../Layout/Spinner'

export const Contacts = () => {

    const contactContext =useContext(ContactContext);
    const authContext =useContext(AuthContext);
    const {contacts,filter,getContact}=contactContext;
    const{loading}=authContext;

    useEffect(() => {

        getContact();
       // eslint-disable-next-line 
    }, [])

    if ( contacts!==null &&!loading && contacts.length===0){
        return <h4>Add Contats..</h4>
    }
    
    return (
        

        <Fragment>
            {contacts!== null && !loading ? <Fragment> {filter !==null ? filter.map(contact =>
            <ContactItem key={contact._id} contact={contact} />
            ) : contacts.map(contact =>
                <ContactItem key={contact._id} contact={contact} />
                ) }</Fragment> : <Spinner />}
            
                
        </Fragment>
        
        
        
        
    )
};

export default Contacts
