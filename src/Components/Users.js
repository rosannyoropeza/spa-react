import React from "react";
import UsersForm from "./UsersForm"
import UsersTable from "./UsersTable"

const Users = ({ datadb, createData, updateData, dataToEdit, setDataToEdit }) => {
    return (
        <div>
            <div className="card bg-primary text-white mb-3">
                <h1 className="display-4 text-center">User Register</h1>
            </div>
            <div class="alert alert-danger d-none" role="alert" id="error-alert">
                
            </div>
            <div class="alert alert-success d-none" role="alert" id="success-alert">
                
            </div>
            <div className="row">
                <div className="col 5">
                    <UsersForm
                        createData = {createData}
                        updateData = {updateData}
                        dataToEdit = {dataToEdit}
                        setDataToEdit = {setDataToEdit}
                    />
                </div>
                <div className="col 7">
                    <UsersTable
                        datadb = {datadb}
                        setDataToEdit = {setDataToEdit}
                    />
                </div>
            </div>
        </div>
    );
}

export default Users;