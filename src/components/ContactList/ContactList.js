import { Link } from "react-router-dom";

const ContactList = ({contacList,onDelete}) => {

    const deleteHandler = (id)=>{
        onDelete(id);
    }

    
    return (  
        <div className='contactlist-container'>
            <ul className='contactlist-ul'>
               {contacList.map((contact)=>{
                   return (
                    <li key={contact.id} className='contactlist-li'>
                        <span>{contact.name}</span>
                        <span>{contact.email}</span>
                        <Link to={`user/${contact.id}`}  state={contact}><button>view Contact</button></Link>
                        <Link to={`edit/${contact.id}`}  state={contact}><button>Edit</button></Link>
                        <button onClick={()=>deleteHandler(contact.id)}>delete</button>
                    </li>
                   );
               })}
            </ul>
        </div>
    );
}
 
export default ContactList;