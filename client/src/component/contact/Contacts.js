import React,{Fragment,useContext} from 'react'
import ContactContext from '../../Context/Contact/ContactContext'
import ContactItem from './ContactItem'

export const Contacts = () => {

    const contactContext =useContext(ContactContext);
    const {contacts,filter}=contactContext;

    if (contacts.length===0){
        return <h4>Add Contats..</h4>
    }
    
    return (

        <Fragment>
            {filter !==null ? filter.map(contact =>
            <ContactItem key={contact.id} contact={contact} />
            ) : contacts.map(contact =>
                <ContactItem key={contact.id} contact={contact} />
                ) }
                
        </Fragment>
        
        
        
        
    )
};

export default Contacts
