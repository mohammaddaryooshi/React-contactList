import { useEffect, useState } from "react";
import { useNavigate,useLocation } from 'react-router-dom';
import EditContactService from "../../Services/EditContactService";
import GetOneContactService from "../../Services/GetOneContactService";
import GetContactService from "../../Services/GetContactService";
import { Link } from "react-router-dom";
import './EditContact.css';
const EditContact = ({setAllContacts}) => {

  const [contact,setContact] = useState({name:"",email:""});
  const location = useLocation();
  const ContactData = location.state;
  const id = ContactData.id;
  const useNavigation = useNavigate();


  useEffect(()=>{
      GetOneContactService(id)
      .then(res=>setContact({name:res.data.name,email:res.data.email}))
      .catch(e=>console.log(e))
  },[]);
 
  

  const changeHandler = (e)=>{
   setContact({...contact,[e.target.name]:e.target.value});
    
  }

  const SubmitHandler = (e)=>{
    e.preventDefault();
    EditContactService(id,contact)
    .then(res=>{
      setAllContacts();
    })
    .catch(e=>console.log(e));
   
    useNavigation('/');
   
  }
    return (
        <>
        <h2>Edit Contact</h2>
        <div className='edit-container'>
            <form className="form" onSubmit={SubmitHandler}>
                <div className='form-control'>
                    <label className='form-lable' htmlFor='Name'>Name : </label>
                    <input className="input" value={contact.name} onChange={changeHandler} name = 'name'  id='Name' type='text'  />
                </div>
                <div className='form-control'>
                    <label className='form-lable' htmlFor='Email'>Email : </label>
                    <input className="input" value={contact.email}  onChange={changeHandler} name = 'email' id='Email' type='text'  />
                </div>
                <div className='form-control'>
                <Link to='/'><button className="btn btn-danger">Back</button></Link>
                    <button type='submit' className='btn btn-success'>EditContact</button>
                </div>
            </form>
        </div>
        </>
      );
}
 
export default EditContact;