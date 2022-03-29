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
                        <button onClick={()=>deleteHandler(contact.id)}>delete</button>
                    </li>
                   );
               })}
            </ul>
        </div>
    );
}
 
export default ContactList;