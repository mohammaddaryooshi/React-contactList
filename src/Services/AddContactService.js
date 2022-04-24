import Http from "./HttpService";
const AddContactService = (data) => {
    return Http.post("/contacts",data);
}
 
export default AddContactService;