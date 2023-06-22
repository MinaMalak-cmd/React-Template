import { useEffect, useState } from "react";
import { deleteRequest, get, post } from "../../Services/httpMethods";

const useGetAllUsers = () => {
    const [users, setUsers] = useState([]);
    const [deletedItem, setDeletedItem] = useState(NaN);
    const [updatedItem, setUpdatedItem] = useState<any>();
    const [showToast, setShowToast] = useState(false);
    const [validated, setValidated] = useState(false);
    const [addedItem, setAddedItem] = useState({
        id: 0,
        name: "",
        email: "",
        password: "",
        age:NaN
    });
    useEffect(() => {
        getUsers();
    }, []);

    const handleInputChange = (key:string, value:string|number) =>{
        setAddedItem({
          ...addedItem,
            [key]: value
        });
    }
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
    const addUser = async() =>{
        if(addedItem.name){
            const response = await post("/user/signup", addedItem);
            if(response){
                setShowToast(true);
            }
            setAddedItem({
                id: 0,
                name: "",
                email: "",
                password: "",
                age:NaN
            });
            getUsers();
        }
    }
    const handleSubmit = () => {
        addUser();
        setValidated(true);
    };
    return {
        users,
        setDeletedItem,
        deletedItem,
        deleteUser,
        setUpdatedItem,
        updatedItem,
        showToast, 
        setShowToast,
        validated,
        setValidated, 
        handleSubmit,
        handleInputChange,
        addedItem
    };
}
 
export default useGetAllUsers;