import React from "react";
import UsersTableRow from "./UsersTableRow";

const UsersTable = ({ datadb, setDataToEdit }) => {
    return (
        <div class="container">
            <div className="row">
                <div className="col">
                    <div>
                        <table className="table table-borderless table-stripped table-hover">
                            <thead className="thead-ligth">
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>CPF</th>
                                    <th>Date of Birth</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {datadb.length > 0 ? (
                                    datadb.map((el) => (
                                        <UsersTableRow
                                            key={el.id}
                                            el={el}
                                            setDataToEdit={setDataToEdit}
                                        />
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4">Records not found...</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UsersTable;