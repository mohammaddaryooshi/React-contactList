import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddContact.css';
const AddContact = ({addcontact}) => {

    const[inputValue,setInputValue] = useState({name:"",email:""});
    const useNavigation = useNavigate();
    const changeHandler = (e)=>{
        setInputValue({...inputValue,[e.target.name]:e.target.value});
    }

    const SubmitHandler = (e)=>{
        e.preventDefault();
        addcontact(inputValue);
        setInputValue({name:"",email:""}); 
        useNavigation('/');
    }

    return (  
        <div className='addcontact-container'>
            <form onSubmit={SubmitHandler}>
                <div className='form-control'>
                    <label className='form-lable' htmlFor='Name'>Name</label>
                    <input value={inputValue.name} onChange={changeHandler} name = 'name'  id='Name' type='text' className='form-input' />
                </div>
                <div className='form-control'>
                    <label className='form-lable' htmlFor='Email'>Email</label>
                    <input value={inputValue.email} onChange={changeHandler} name = 'email' id='Email' type='text' className='form-input' />
                </div>
                <div className='form-control'>
                    <button type='submit' className='btn'>AddContact</button>
                </div>
            </form>
        </div>
    );
}
 
export default AddContact;