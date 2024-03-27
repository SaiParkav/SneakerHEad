import http from "./http";
const createsignup = data => {
    return http.post("/",data);
};
const createlogin = data => {
    return http.post("/",data)
};
const UserService = {
    createsignup,
    createlogin
};
export default UserService