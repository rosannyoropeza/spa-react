import React from "react";

const ProductsTable = ({datadb}) => {
    return (
        <div>
            <table className="table table-borderless table-stripped table-hover">
                <thead className="thead-ligth">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Serie</th>
                        <th>Length</th>
                        <th>Height</th>
                    </tr>
                </thead>
                <tbody>
                    { datadb.length > 0 ? (
                        datadb.map((el) => (
                            <tr>
                                <td>{el.id}</td>
                                <td>{el.name}</td>
                                <td>{el.serie}</td>
                                <td>{el.length}</td>
                                <td>{el.height}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">Records not found...</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default ProductsTable;