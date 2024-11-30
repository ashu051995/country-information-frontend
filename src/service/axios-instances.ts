import axios from "axios";

const apiEndPoint = "http://localhost:5000"

export const apiGatewayInstance = axios.create({
    baseURL:apiEndPoint,
    headers:{
        'Content-Type':"application/json",
        Accept:"application/json",
    }
});

apiGatewayInstance.interceptors.request.use((request:any)=>{
    return request
})