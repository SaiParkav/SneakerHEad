import http from "../http-common";
const getAll=()=>{
    return http.get("/user");
};
const getByEmail=email=>{
    return http.get(`/users/${email}`);
};
const create=data=>{
    return http.post("/saveUser",data);
};
const update=email=>{
    return http.put(`/users/${email}`)
};
const login=user=>{
    return http.post("/login",user);
}
const UserService={
    getAll,
    getByEmail,
    create,
    update,
    login

}
export default UserService;