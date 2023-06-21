import useGetAllUsers from "./useGetAllUsers";

const GetAllUsers = () => {
  const { users } = useGetAllUsers();
  return (
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
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
};

export default GetAllUsers;
