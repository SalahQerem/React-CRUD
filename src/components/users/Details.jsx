import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Details() {
    
    let [user, setUser] = useState({});
    const {id} = useParams('id');
    
    useEffect(() => {
        getUser();
    }, [])

    const getUser = async() => {
        const {data} = await axios.get(`https://crud-users-gold.vercel.app/users/${id}`);
        setUser(data.user);
        console.log(data);
    }

  return (
    <div className="container-fluid">
        <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <span className="fs-5 d-none d-sm-inline">Menu</span>
            </a>
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
            <li className="nav-item">
                <a href="#" className="nav-link align-middle px-0">
                <i className="fs-4 bi-house" /> <span className="ms-1 d-none d-sm-inline">Home</span>
                </a>
            </li>
            <li>
                <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                <i className="fs-4 bi-speedometer2" /> <span className="ms-1 d-none d-sm-inline">Dashboard</span> </a>
                <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                <li className="w-100">
                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1 </a>
                </li>
                <li>
                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2 </a>
                </li>
                </ul>
            </li>
            <li>
                <a href="#" className="nav-link px-0 align-middle">
                <i className="fs-4 bi-table" /> <span className="ms-1 d-none d-sm-inline">Orders</span></a>
            </li>
            <li>
                <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                <i className="fs-4 bi-bootstrap" /> <span className="ms-1 d-none d-sm-inline">Bootstrap</span></a>
                <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                <li className="w-100">
                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1</a>
                </li>
                <li>
                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2</a>
                </li>
                </ul>
            </li>
            <li>
                <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                <i className="fs-4 bi-grid" /> <span className="ms-1 d-none d-sm-inline">Products</span> </a>
                <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                <li className="w-100">
                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 1</a>
                </li>
                <li>
                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 2</a>
                </li>
                <li>
                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 3</a>
                </li>
                <li>
                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 4</a>
                </li>
                </ul>
            </li>
            <li>
                <a href="#" className="nav-link px-0 align-middle">
                <i className="fs-4 bi-people" /> <span className="ms-1 d-none d-sm-inline">Customers</span> </a>
            </li>
            </ul>
            <hr />
            <div className="dropdown pb-4">
            <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="hugenerd" width={30} height={30} className="rounded-circle" />
                <span className="d-none d-sm-inline mx-1">loser</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                <li><a className="dropdown-item" href="#">New project...</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li>
                <hr className="dropdown-divider" />
                </li>
                <li><a className="dropdown-item" href="#">Sign out</a></li>
            </ul>
            </div>
        </div>
        </div>
        <div className="col py-3">
            {user.name}
        </div>
        </div>
    </div>
  )
}

export default Details