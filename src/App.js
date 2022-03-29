
import { useState } from 'react';
import './App.css';
import AddContact from './components/AddContact/AddContact';
import ContactList from './components/ContactList/ContactList';

function App() {
  
  const [contacts,setContacts] = useState([]);

  const addcontactHandler = (contact)=>{
      setContacts([...contacts,{id:Math.ceil(Math.random()*1000),...contact}]);
  }

  const deleteContactHandler = (id)=>{
    console.log(id);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>ContactList App</h1>
        <AddContact addcontact = {addcontactHandler} /> 
        <ContactList contacList = {contacts} onDelete = {deleteContactHandler} /> 
      </header>
    </div>
  );
}

export default App;
