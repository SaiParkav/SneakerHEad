import axios from'axios';

export default axios.create({
    baseURL:"http://localhost:9087/api",
    headers:{
        "Content-Type":"application/json"
    }
});