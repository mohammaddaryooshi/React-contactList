import Http from "./HttpService";
const GetContactService = () => {
    return Http.get("/contacts");
}
 
export default GetContactService;