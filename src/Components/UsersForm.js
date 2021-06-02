import React, { useState, useEffect } from "react";

const initialForm = {
    name: '',
    email: '',
    password: '',
}

const UsersForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
    
    const [values, setValues] = useState(initialForm)

    useEffect(() => {
        if (dataToEdit) {
            setValues(dataToEdit);
        } else {
            setValues(initialForm);
        }
      }, [dataToEdit]);
      
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!values.name || !values.email || !values.password) {
            alert("Datos incompletos");
            return;
        }
        if (values.id == null) {
            createData(values);
        } else {
            updateData(values);
        }

        handleReset();
    };

    const handleReset = (e) => {
        setValues(initialForm);
        setDataToEdit(null);
    };

    return (
        <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="form-row mb-3 input-group">
                <div className="input-group-text  col-2 text-center">
                    <i className="material-icons">account_box</i>
                </div>
                <div className="form-group col 10">
                    <input className="form-control" placeholder="Full Name" name="name" onChange={handleChange}
                        value={values.name}
                    />
                </div>
            </div>
            <div className="form-row mb-3 input-group">
                <div className="input-group-text col-2 text-center">
                    <i className="material-icons">email</i>
                </div>
                <div className="form-group col 10">
                    <input className="form-control" type="email" placeholder="Email" name="email" onChange={handleChange}
                        value={values.email}
                    />
                </div>
            </div>
            <div className="form-row mb-3 input-group">
                <div className="input-group-text col-2 text-center">
                    <i className="material-icons">vpn_key</i>
                </div>
                <div className="form-group col 10">
                    <input className="form-control" type="password" placeholder="Password" name="password" onChange={handleChange}
                        value={values.password}
                    />
                </div>
            </div>

            <div className="container mb-3">
                <div className="row">
                    <div className="col">
                        <button type="submit" id="btnSubmit" className="btn btn-primary form-control btn-block">Save</button>
                    </div>
                    <div className="col">
                        <button type="reset" className="btn btn-danger form-control  btn-block" onClick={handleReset}>Cancel</button>
                    </div>
                </div>
            </div>
        </form >
    );
}

export default UsersForm;