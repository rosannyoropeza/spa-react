import React, { useEffect, useState } from 'react';
import './App.css';
import Users from './Components/Users';
import Products from './Components/Products';
import {Http} from './Requests/Http';
import "bootstrap/dist/css/bootstrap.min.css";

const urlPost = 'http://192.168.1.12/apilaravel/public/api/register';
const urlGet = 'http://192.168.1.12/apilaravel/public/api/user';
const urlEdit = 'http://192.168.1.12/apilaravel/public/api/user/update';
const urlGetProducts = 'http://192.168.1.12/apilaravel/public/api/product';

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
        alert(data.messsage)
      }else{
        datadb.id = data.data.id
        setUsers([...users, datadb])
        alert(data.messsage)
      }
    });
  }
  /* FUNCTION PUT USER */
  const updateData = (datadb) => {
    Http().UpdateData(urlEdit, datadb.id, datadb)
    .then(data => {
      if (data.errors){
        alert(data.messsage)
      }else{
        alert(data.messsage)
        data = data.data;
        let newData = users.map((el) => (el.id === data.id ? data : el));
        setUsers(newData);
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
      <div className="row">
        <div className="col">
          { 
            !products ? 'Cargando...' : 
            <Products datadb = {products.data}/> 
          }
        </div>
      </div>
    </div>
  );
}

export default App;
