import Http from "./HttpService";
const DeleteContactService = (id) => {
    return Http.delete(`/contacts/${id}`);
}
 
export default DeleteContactService;