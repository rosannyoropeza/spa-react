import React from "react";

const UsersTableRow = ({el, setDataToEdit}) => {
    let { id, name, email, telf, cpf,fecha_nac } = el;
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{telf}</td>
            <td>{cpf}</td>
            <td>{fecha_nac}</td>
            <td>
                <a className="btn text-primary a-group" onClick={() => setDataToEdit(el)}>
                    <i className="material-icons">mode_edit</i>
                </a>          
            </td>
        </tr>
    );
}


export default UsersTableRow;