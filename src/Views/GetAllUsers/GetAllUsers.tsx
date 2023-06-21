import { loadFull } from "tsparticles"; 
import Particles from "react-tsparticles"; 

import particles from "../../Assets/animations/particles.json";
import useGetAllUsers from "./useGetAllUsers";
import {ButtonGroup} from "react-bootstrap";

const GetAllUsers = () => {
  const { users, setDeletedItem, deletedItem, deleteUser, setUpdatedItem, updatedItem } = useGetAllUsers();
  return (
    <>
       {/* <Particles 
        id="tsparticles" 
        // init={particlesInit} 
        // loaded={particlesLoaded} 
        particles={particles}
        options={{ 
          fpsLimit: 60, 
        }} 
      />  */}
      <div className="container-fluid py-3 px-3">
        <div className="row">
          <div className="col-sm-12">
            <table className="table table-dark table-striped table-bordered table-hover">
              <thead>
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user: any) => {
                  return (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.age}</td>
                      <td>
                      <div aria-label="user table actions" className="d-flex">
                        <button className="btn btn-primary" onClick={() => setUpdatedItem(user)}>Update</button>
                        <button className="btn btn-danger mx-2" onClick={() => setDeletedItem(user.id)}>Delete</button>
                      </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetAllUsers;
