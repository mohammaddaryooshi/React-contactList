import Http from "./HttpService";

const GetOneContactService = (id) => {
    return Http.get(`/contacts/${id}`);
}
 
export default GetOneContactService;