import React from "react";
import UsersTableRow from "./UsersTableRow";

const UsersTable = ({datadb, setDataToEdit}) => {
    return (
        <div>
            <table className="table table-borderless table-stripped table-hover">
                <thead className="thead-ligth">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { datadb.length > 0 ? (
                        datadb.map((el) => (
                            <UsersTableRow
                                key={el.id}
                                el={el}
                                setDataToEdit = {setDataToEdit}
                            />
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">Sin datos</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default UsersTable;