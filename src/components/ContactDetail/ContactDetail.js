import { useLocation,Link} from "react-router-dom";
import './ContactDetail.css';
const ContactDetail = () => {
    const location = useLocation();
   
  
    const {name,email} = location.state;
    return ( 
       <>
        <h2>Show Contact</h2>
        <div className="contactdeatil-container" >
            <span className="des-title">Name : </span>
             <span className="descrption">{name}</span> 
             <span className="des-title">Email : </span>
             <span className="descrption">{email}</span> 
        </div>
        <Link to='/'><button className="btn btn-danger">Back</button></Link>
       </>
     );
}
 
export default ContactDetail;