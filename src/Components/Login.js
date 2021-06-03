import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const initialUser = {
    email: '',
    password: '',
}

const Login = ({ loginUser }) => {
    const [user, setUser] = useState(initialUser)

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!user.email || !user.password) {
            alert("Enter email and password");
            return;
        }
        
        loginUser(user);
    }

    return (
        <div class="container bg-info">
            <div className="container mb-3 p-4 text-white">
                <h1 className="display-4 text-center"> Login</h1>
            </div>
            <div class="alert alert-danger d-none" role="alert" id="error-alert">

            </div>
            <div class="alert alert-success d-none" role="alert" id="success-alert">

            </div>
            <div className="row">
                <div className="col">
                    <div class="bg-white p-4 m-4">
                        <form autoComplete="off" onSubmit={handleSubmit}>
                            <div className="form-row mb-3 input-group">
                                <div className="input-group-text col-2 text-center">
                                    <i className="material-icons">email</i>
                                </div>
                                <div className="form-group col 10">
                                    <input className="form-control" type="email" placeholder="Email" name="email" 
                                        value={user.email}  onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-row mb-3 input-group">
                                <div className="input-group-text col-2 text-center">
                                    <i className="material-icons">vpn_key</i>
                                </div>
                                <div className="form-group col 10">
                                    <input className="form-control" type="password" placeholder="Password" name="password"
                                        value={user.password}  onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="container mb-3">
                                <div className="row">
                                    <div className="col">
                                        <button type="submit" id="btnSubmit" className="btn btn-primary form-control btn-block">Login</button>
                                    </div>
                                </div>
                            </div>
                        </form >
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <div class="bg-white p-4 m-4">
                        <form autoComplete="off">
                            <div className="container mb-3">
                                <div className="row">
                                    <div className="col">
                                        <Link to="/register" className="btn btn-primary form-control btn-block">Register</Link>
                                    </div>
                                </div>
                            </div>
                        </form >
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;