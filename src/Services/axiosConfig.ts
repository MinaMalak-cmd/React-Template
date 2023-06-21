import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
const headers = {
    'Content-Type': 'application/json',
}

export const get = async (url:string, timeout=3000) =>{
    try {
        const response = await axios.get(url, {
            headers:headers, 
            timeout:timeout,
            responseType:'json'
        });
        return response;  
    } catch (error:any) {
        console.log("🚀 ~ file: axiosConfig.ts:8 ~ error:", error)
    }

};