import Http from "./HttpService";
const EditContactService = (id,data) => {
    return Http.put(`/contacts/${id}`,data);
}
 
export default EditContactService;