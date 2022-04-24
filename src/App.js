
import { useEffect, useState } from 'react';
import './App.css';
import AddContact from './components/AddContact/AddContact';
import ContactList from './components/ContactList/ContactList';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ContactDetail from './components/ContactDetail/ContactDetail';
import GetContactService from './Services/GetContactService';
import DeleteContactService from './Services/DeleteContactService';
import AddContactService from './Services/AddContactService';
import EditContact from './components/EditContact/EditContact';


function App() {
  
  const [contacts,setContacts] = useState([]);
  const [allContacts,setAllContacts] = useState([]);

  const fetchContacts = ()=>{
    const allContacts = GetContactService()
    .then(res=>{
      setContacts(res.data);
      setAllContacts(res.data);
    }

    )
    .catch(er=>console.log(er));

    
  }

  const addcontactHandler = (contact)=>{
    const newContact = {id:Math.ceil(Math.random()*1000),...contact}; 
    AddContactService(newContact)
    .then((res)=>{
      setContacts([...contacts,newContact])
    })
    .catch(er=>console.log(er));
      
  }

  const deleteContactHandler = (id)=>{

    DeleteContactService(id)
    .then(res=>{
      const filtered = contacts.filter((c)=>{
        return c.id !== id;
      })
  
      setContacts(filtered);
     
    })
    .catch(er=>console.log(er));

   
  }


  const searchHandler = (e)=>{
    const search = e.target.value;
    
    
    if(search != ""){
      const filteredItems = allContacts.filter((c)=>{
        return Object.values(c).join(" ").toLowerCase().includes(search.toLowerCase());
      });

      setContacts(filteredItems);
    }else{
      setContacts(allContacts);
    }
  }



  useEffect(()=>{
    // const savedContacts = JSON.parse(localStorage.getItem('contacts'));
     fetchContacts();
  },[]);

  // useEffect(()=>{
  //   localStorage.setItem('contacts',JSON.stringify(contacts));
  // },[contacts]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>ContactList App</h1>
         <input name = "search" type="text" onChange={searchHandler} />
         <BrowserRouter>
         <div>
          <Link to='/addcontact'><button>AddContact</button></Link>
        </div>
         <Routes>
        <Route path="/addcontact"  element = {<AddContact  addcontact = {addcontactHandler} />} />
        <Route path="/" element={<ContactList contacList = {contacts} onDelete = {deleteContactHandler}  /> } />
        <Route path='/user/:id' element={<ContactDetail  />} />
        <Route path='/edit/:id' element={<EditContact setAllContacts = {fetchContacts}  />} />
        </Routes>
         </BrowserRouter>
        {/* <AddContact addcontact = {addcontactHandler} /> 
        <ContactList contacList = {contacts} onDelete = {deleteContactHandler} />  */}
      </header>
    </div>
  );
}

export default App;
