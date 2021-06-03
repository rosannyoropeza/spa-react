import React, { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import Users from './Components/Users';
import { Http } from './Requests/Http';
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import UsersTable from './Components/UsersTable';

const endPoint = 'http://192.168.1.12/apilaravel/public/api';
const urlPost = endPoint + '/register';
const urlLogin = endPoint + '/login';
const urlGet = endPoint + '/user';
const urlEdit = endPoint + '/user/update';
const urlGetProducts = endPoint + '/product';

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

  /* FUNCTION POST USERLOGIN */
  const loginUser = (datadb) => {
    Http().PostData(urlLogin, datadb)
      .then(data => {
        if (data.errors) {
          var t = document.getElementById("error-alert");
          t.classList.toggle("d-none");
          t.innerHTML = "";
          Object.entries(data.errors).forEach(([key, value]) => {
            t.insertAdjacentHTML("beforeend", `<li>${value[0]}</li>`);
          });
          setTimeout(() => {
            var t = document.getElementById("error-alert");
            t.classList.toggle("d-none");
          }, 2500)
        } else {
          setUsers([...users, datadb])
          document.location.href = '/home';
        }
      });
  }

  /* FUNCTION POST USER */
  const createData = (datadb) => {
    Http().PostData(urlPost, datadb)
      .then(data => {
        if (data.errors) {
          var t = document.getElementById("error-alert");
          t.classList.toggle("d-none");
          t.innerHTML = "";
          Object.entries(data.errors).forEach(([key, value]) => {
            t.insertAdjacentHTML("beforeend", `<li>${value[0]}</li>`);
          });
          setTimeout(() => {
            var t = document.getElementById("error-alert");
            t.classList.toggle("d-none");
          }, 2500)
        } else {
          var t = document.getElementById("success-alert");
          t.classList.toggle("d-none");
          t.innerHTML = `<li>${data.messsage}</li>`;
          datadb.id = data.data.id
          setUsers([...users, datadb])
          setTimeout(() => {
            var t = document.getElementById("success-alert");
            t.classList.toggle("d-none");
            document.location.href = '/';
          }, 2500)

        }
      });
  }

  const updateData = (datadb) => {
    Http().UpdateData(urlEdit, datadb.id, datadb)
      .then(data => {
        if (data.errors) {
          var t = document.getElementById("error-alert");
          t.classList.toggle("d-none");
          t.innerHTML = "";
          Object.entries(data.errors).forEach(([key, value]) => {
            t.insertAdjacentHTML("beforeend", `<li>${value[0]}</li>`);
          });
          setTimeout(() => {
            var t = document.getElementById("error-alert");
            t.classList.toggle("d-none");
          }, 2500)
        } else {
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
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login loginUser={loginUser} />
        </Route>
        <Route path="/home">
          <Home 
           users={users}
           products={products}
           createData={createData}
           updateData={updateData}
           dataToEdit={dataToEdit}
           setDataToEdit={setDataToEdit}
          />
        </Route>
        <Route path="/register">
          <Users
            createData={createData}
            updateData={updateData}
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
