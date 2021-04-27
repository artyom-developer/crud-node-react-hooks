import React, { useEffect, useState  } from 'react';

import customerService from "../../services/Customer"

import { Link } from 'react-router-dom';

function List(){

  const [ listCustomer, setListCustomer ] = useState([]);

  useEffect(()=>{

    async function fetchDataCustomer(){
      const res = await customerService.list()
      if (res.succes) {
        setListCustomer(res.data)
      }
    }

    fetchDataCustomer();

  },[])

  return (
    <section>
      <table class="table">
        <thead class="thead-dark table-bordered">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
      
          {
            listCustomer.map((item)=>{
              return(
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td>{item.phone}</td>
                  <td>
                    <Link to={"/customer/edit/"+item.id} class="btn btn-light"> Edit </Link>
                    <a href="#" class="btn btn-danger"> Delete </a>
                  </td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
    </section>
  )
}

export default List;
