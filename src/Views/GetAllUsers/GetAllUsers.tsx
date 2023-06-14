import useGetAllUsers from "./useGetAllUsers";

const GetAllUsers = () => {
    const {x} = useGetAllUsers();
    return ( 
        <div className="user">{x}</div>
     );
}
 
export default GetAllUsers;