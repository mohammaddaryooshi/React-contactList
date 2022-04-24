import { useLocation} from "react-router-dom";

const ContactDetail = () => {
    const location = useLocation();
   
  
    const {name,email} = location.state;
    return ( 
        <div>
            <p>name : {name} </p>
            <p>email :{email} </p>
        </div>
     );
}
 
export default ContactDetail;