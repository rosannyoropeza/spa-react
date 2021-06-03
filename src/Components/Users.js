import React from "react";
import UsersForm from "./UsersForm"

const Users = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
    return (
        <div class="container">
            <div className="row">
                <div className="col">
                    <div>
                        <div className="card bg-primary text-white mb-3">
                            <h1 className="display-4 text-center">User Form</h1>
                        </div>
                        <div class="alert alert-danger d-none" role="alert" id="error-alert">

                        </div>
                        <div class="alert alert-success d-none" role="alert" id="success-alert">

                        </div>
                        <div className="row">
                            <div className="col">
                                <UsersForm
                                    createData={createData}
                                    updateData={updateData}
                                    dataToEdit={dataToEdit}
                                    setDataToEdit={setDataToEdit}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Users;