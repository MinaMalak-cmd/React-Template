import { useEffect, useState } from "react";
import { deleteRequest, get, post, update } from "../../Services/httpMethods";

const useGetAllUsers = () => {
    const [users, setUsers] = useState([]);
    const [deletedItem, setDeletedItem] = useState(NaN);
    const [showToast, setShowToast] = useState(false);
    const [validated, setValidated] = useState(false);
    const [mode, setMode] = useState("Add");
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
            resetHandler();
            getUsers();
        }
    }
    const updateUser = async() =>{
        if(addedItem.name){
            const response = await update(`/user/${addedItem.id}`, addedItem);
            if(response){
                setShowToast(true);
            }
            resetHandler();
            getUsers();
        }
    }
    const handleSubmit = () => {
        if(mode === "Update"){
            updateUser();
        }
        else{
            addUser();
        }
        setValidated(true);
    };
    const resetHandler = () => {
        setAddedItem({
            id: 0,
            name: "",
            email: "",
            password: "",
            age:NaN
        });
        setMode("Add");
    }
    return {
        users,
        setDeletedItem,
        deletedItem,
        deleteUser,
        showToast, 
        setShowToast,
        validated,
        setValidated, 
        handleSubmit,
        handleInputChange,
        addedItem,
        mode, 
        setMode,
        resetHandler,
        setAddedItem
    };
}
 
export default useGetAllUsers;