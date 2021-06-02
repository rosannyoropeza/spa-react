import React, { useEffect, useState } from 'react';
import './App.css';
import Users from './Components/Users';
import Products from './Components/Products';
import {Http} from './Requests/Http';
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

const endPoint      = 'http://192.168.1.12/apilaravel/public/api';
const urlPost       = endPoint + '/register';
const urlGet        = endPoint + '/user';
const urlEdit       = endPoint + '/user/update';
const urlGetProducts= endPoint + '/product';

function App() {
  /* GET USERS */
  const [users, setUsers] = useState();  
  const [dataToEdit, setDataToEdit] = useState(null);
  const fetchApi = async () => {
    const response = await fetch(urlGet)
    const responseJSON = await response.json()
    setUsers(responseJSON)
  }  
  useEffect(() => {
    fetchApi()
  }, [])

  /* FUNCTION POST USER */
  const createData = (datadb) => {
    Http().PostData(urlPost, datadb)
    .then(data => {
      if (data.errors){
        var t = document.getElementById("error-alert");
        t.classList.toggle("d-none");
        t.innerHTML  = "";
        Object.entries(data.errors).forEach(([key, value]) => {     
          t.insertAdjacentHTML("beforeend",`<li>${value[0]}</li>`);
        });        
        setTimeout(() => {
          var t = document.getElementById("error-alert");
          t.classList.toggle("d-none");
        }, 2500)
      }else{
        var t = document.getElementById("success-alert");
        t.classList.toggle("d-none");
        t.innerHTML = `<li>${data.messsage}</li>`;
        datadb.id = data.data.id
        setUsers([...users, datadb])
        setTimeout(() => {
          var t = document.getElementById("success-alert");
          t.classList.toggle("d-none");
        }, 2500)
      }
    });
  }
  /* FUNCTION PUT USER */
  const updateData = (datadb) => {
    Http().UpdateData(urlEdit, datadb.id, datadb)
    .then(data => {
      if (data.errors){
        var t = document.getElementById("error-alert");
        t.classList.toggle("d-none");
        t.innerHTML  = "";
        Object.entries(data.errors).forEach(([key, value]) => {     
          t.insertAdjacentHTML("beforeend",`<li>${value[0]}</li>`);
        });
        setTimeout(() => {
          var t = document.getElementById("error-alert");
          t.classList.toggle("d-none");
        }, 2500)
      }else{
        var t = document.getElementById("success-alert");
        t.classList.toggle("d-none");
        t.innerHTML = `<li>${data.messsage}</li>`;
        data = data.data;
        let newData = users.map((el) => (el.id === data.id ? data : el));
        setUsers(newData);        
        setTimeout(() => {
          var t = document.getElementById("success-alert");
          t.classList.toggle("d-none");
        }, 2500)
      }
    });
  }

   /* GET PRODUCTS */
   const [products, setProducts] = useState();
   const fetchProducts = async () => {
     const response = await fetch(urlGetProducts)
     const responseJSON = await response.json()
     setProducts(responseJSON)
   }  
   useEffect(() => {
     fetchProducts()
   }, [])

  /* RENDER MAIN */
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
              { !users ? 'Cargando...' :
                <Users 
                datadb = {users}
                createData = {createData} 
                updateData = {updateData} 
                dataToEdit = {dataToEdit} 
                setDataToEdit = {setDataToEdit} 
                />
              }
            </div>
          </div>
        </div>

        <div class="tab-pane fade" id="products" role="tabpanel" aria-labelledby="product-tab">
          <div className="row">
            <div className="col">
              { 
                !products ? 'Cargando...' : 
                <Products datadb = {products.data}/> 
              }
            </div>
          </div>          
        </div>

      </div>
    </div>
  );
}

export default App;
