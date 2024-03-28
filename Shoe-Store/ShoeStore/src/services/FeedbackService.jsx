import http from "../http-common";

const create=data=>{
    return http.post("/feedback",data);
}
const get=()=>{
    return http.get("/feedback");
}
const FeedbackService={
    create,
    get
}
export default FeedbackService;