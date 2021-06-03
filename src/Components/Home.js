import React from "react";
import Users from './Users';
import UsersTable from './UsersTable';
import Products from './Products';
const Home = ({ users, products, createData, updateData, dataToEdit, setDataToEdit }) => {
    return (
        <div class="container">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="users-tab" data-bs-toggle="tab" data-bs-target="#users" type="button" role="tab" aria-controls="users" aria-selected="true">Users</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="product-tab" data-bs-toggle="tab" data-bs-target="#products" type="button" role="tab" aria-controls="products" aria-selected="false">Products</button>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">

                <div class="tab-pane fade show active" id="users" role="tabpanel" aria-labelledby="user-tab">
                    <div className="row">
                        <div className="col">
                            {!users ? 'Cargando...' :
                                <div>
                                    <UsersTable
                                        datadb={users}
                                        createData={createData}
                                        updateData={updateData}
                                        dataToEdit={dataToEdit}
                                        setDataToEdit={setDataToEdit}
                                    />
                                    <Users
                                        createData={createData}
                                        updateData={updateData}
                                        dataToEdit={dataToEdit}
                                        setDataToEdit={setDataToEdit}
                                    />
                                </div>
                            }
                        </div>
                    </div>
                </div>

                <div class="tab-pane fade" id="products" role="tabpanel" aria-labelledby="product-tab">
                    <div className="row">
                        <div className="col">
                            {
                                !products ? 'Cargando...' :
                                    <Products datadb={products.data} />
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;