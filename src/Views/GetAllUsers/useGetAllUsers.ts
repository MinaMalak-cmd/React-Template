import { useEffect, useState } from "react";
import { get } from "../../Services/httpMethods";

const useGetAllUsers = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async() =>{
        const response = await get("/user");
        setUsers(response?.data.result);
    }
    return {
        users
    };
}
 
export default useGetAllUsers;