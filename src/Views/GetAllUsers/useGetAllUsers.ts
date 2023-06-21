import { useEffect, useState } from "react";
import { deleteRequest, get } from "../../Services/httpMethods";

const useGetAllUsers = () => {
    const [users, setUsers] = useState([]);
    const [deletedItem, setDeletedItem] = useState(NaN);
    const [updatedItem, setUpdatedItem] = useState<any>();
    console.log("🚀 ~ file: useGetAllUsers.ts:8 ~ useGetAllUsers ~ updatedItem:", updatedItem, deletedItem)
    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async() =>{
        const response = await get("/user");
        setUsers(response?.data.result);
    }
    const deleteUser = async() =>{
        // const response = await deleteRequest(`/user/${deletedItem}`);
        console.log("🚀 ~ file: useGetAllUsers.ts:18 ~ deleteUser ~ deletedItem:", deletedItem);
        setDeletedItem(NaN);
        getUsers();
    }
    return {
        users,
        setDeletedItem,
        deletedItem,
        deleteUser,
        setUpdatedItem,
        updatedItem
    };
}
 
export default useGetAllUsers;