import { Link } from "react-router-dom";
import './ContactList.css';
const ContactList = ({contacList,onDelete,allContact,setContact}) => {

    const deleteHandler = (id)=>{
        onDelete(id);
    }

    const searchHandler = (e)=>{
        const search = e.target.value;
        
        
        if(search != ""){
          const filteredItems = allContact.filter((c)=>{
            return Object.values(c).join(" ").toLowerCase().includes(search.toLowerCase());
          });
    
          setContact(filteredItems);
        }else{
          setContact(allContact);
        }
      }

    
    return (  
       <>
        
        
        <div className="top-bar">
        <input className="input" name = "search" type="text" onChange={searchHandler} placeholder="search ... " />
         <Link to='/addcontact'><button className="btn btn-success">AddContactPage</button></Link>
       </div>
        <div className='contactlist-container'>
            <ul className='contactlist-ul'>
               {contacList.map((contact)=>{
                   return (
                    <li key={contact.id} className='contactlist-li'>
                        <div className="info-box">
                        <span className="title">Name : </span>
                        <span className="descritption">{contact.name}</span>
                        <span className="title">Email : </span>
                        <span className="descritption">{contact.email}</span>
                        </div>
                         <div className="operator-box">
                         <Link className="link" to={`user/${contact.id}`}  state={contact}><button className="btn btn-success">view</button></Link>
                        <Link className="link" to={`edit/${contact.id}`}  state={contact}><button className="btn btn-warning">Edit</button></Link>
                        <button className="btn btn-danger" onClick={()=>deleteHandler(contact.id)}>delete</button>
                         </div>
                    </li>
                   );
               })}
            </ul>
        </div>
       </>
    );
}
 
export default ContactList;