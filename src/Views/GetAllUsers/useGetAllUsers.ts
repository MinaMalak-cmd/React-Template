import { useEffect, useState } from "react";
import { deleteRequest, get } from "../../Services/httpMethods";

const useGetAllUsers = () => {
    const [users, setUsers] = useState([]);
    const [deletedItem, setDeletedItem] = useState(NaN);
    const [updatedItem, setUpdatedItem] = useState<any>();
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async() =>{
        const response = await get("/user");
        setUsers(response?.data.result);
    }
    const deleteUser = async() =>{
        const response = await deleteRequest(`/user/${deletedItem}`);
        if(response){
            setShowToast(true);
        }
        setDeletedItem(NaN);
        getUsers();
    }
    return {
        users,
        setDeletedItem,
        deletedItem,
        deleteUser,
        setUpdatedItem,
        updatedItem,
        showToast, 
        setShowToast
    };
}
 
export default useGetAllUsers;