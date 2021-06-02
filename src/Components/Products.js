import React from "react";
import ProductsTable from "./ProductsTable"

const Products = ({ datadb }) => {
    return (
        <div>
            <div className="card bg-info text-white mb-3">
                <h1 className="display-4 text-center">Products List</h1>
            </div>

            <div className="row">
                <div className="col">
                    <ProductsTable datadb = {datadb}/>
                </div>
            </div>
        </div>
    );
}

export default Products;