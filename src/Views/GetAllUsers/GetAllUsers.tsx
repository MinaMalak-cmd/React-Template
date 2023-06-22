import useGetAllUsers from "./useGetAllUsers";
import {
  Form,
  Modal,
  Toast,
  ToastContainer,
  Card,
} from "react-bootstrap";

const GetAllUsers = () => {
  const {
    users,
    setDeletedItem,
    deletedItem,
    deleteUser,
    showToast,
    setShowToast,
    validated,
    handleSubmit,
    handleInputChange,
    addedItem,
    mode, 
    setMode,
    resetHandler,
    setAddedItem
  } = useGetAllUsers();

  return (
    <>
      <div className="container-fluid py-3 px-3">
        <div className="row">
          <div className="col-sm-11 m-auto">
            <Card bg="info" text="dark" className="mb-2 ">
              <Card.Header>
                {(mode === "Update") ? "Update User" : "Add User"}
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  {(mode === "Update") ? "Update User" : "Add User"}
                </Card.Title>
                <Card.Text>
                  <Form
                    autoComplete="false"
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Form.Group className="mb-3" controlId="user.ControlInput1">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        required
                        onChange={(e: any) =>
                          handleInputChange("name", e?.target.value)
                        }
                        value={addedItem.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please Enter user name.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="user.ControlInput2">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        onChange={(e: any) =>
                          handleInputChange("email", e?.target.value)
                        }
                        value={addedItem.email}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="user.ControlInput3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter password"
                        onChange={(e: any) =>
                          handleInputChange("password", e?.target.value)
                        }
                        value={addedItem.password}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="user.ControlInput4">
                      <Form.Label>Age</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter your Age"
                        onChange={(e: any) =>
                          handleInputChange("age", e?.target.value)
                        }
                        value={addedItem.age}
                      />
                    </Form.Group>
                    <button
                      className="btn btn-danger"
                      type="button"
                      onClick={handleSubmit}
                    >
                      {(mode === "Update") ? "Update User" : "Add User"}
                    </button>
                    {(mode === "Update") && 
                      <button
                        className="btn btn-dark mx-2"
                        type="button"
                        onClick={resetHandler}
                      >
                        Reset
                      </button>
                    }
                  </Form>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-sm-11 m-auto">
            <table className="table table-info table-striped table-bordered table-hover">
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
                {users?.map((user: any) => {
                  return (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.age}</td>
                      <td>
                        <div aria-label="user table actions" className="d-flex">
                          <button
                            className="btn btn-primary"
                            onClick={() => {setAddedItem(user); setMode("Update");}}
                          >
                            Update
                          </button>
                          <button
                            className="btn btn-danger mx-2"
                            onClick={() => setDeletedItem(user.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <Modal
            show={deletedItem ? true : false}
            onHide={() => setDeletedItem(NaN)}
          >
            <Modal.Header closeButton>
              <Modal.Title>Delete Item</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this item ?</Modal.Body>
            <Modal.Footer>
              <button
                className="btn btn-secondary"
                onClick={() => setDeletedItem(NaN)}
              >
                Close
              </button>
              <button className="btn btn-primary" onClick={deleteUser}>
                Save Changes
              </button>
            </Modal.Footer>
          </Modal>
        </div>
        <div className="row">
          <ToastContainer className="bottom-end">
            <Toast
              onClose={() => setShowToast(false)}
              show={showToast}
              delay={3000}
              autohide
              bg="primary"
            >
              <Toast.Body className="text-white">
                your request done successfully
              </Toast.Body>
            </Toast>
          </ToastContainer>
        </div>
       
      </div>
    </>
  );
};

export default GetAllUsers;
