import React, { useEffect, useState  } from 'react';

import customerService from "../../services/Customer"

import swal from 'sweetalert';

function Edit(props){

  const [ id, setId ] = useState(null);
  const [ name, setName ] = useState(null);
  const [ email, setEmail ] = useState(null);
  const [ address, setAddress ] = useState(null);
  const [ phone, setPhone ] = useState(null);

  useEffect(()=>{

    async function fetchDataCustomer(){

        let id = props.match.params.id;
        const res = await customerService.get(id);

        if (res.success&&res.data) {

          const data = res.data
          console.log(data);
          setId(data.id)
          setName(data.name)
          setEmail(data.email)
          setAddress(data.address)
          setPhone(data.phone)

        }

      }
      fetchDataCustomer();

  },[]);

  const onClickUpdate = async () => {

    const data = { id, name, email, address, phone }

    const res = await customerService.update(data);
    
    if (res.success) {
      swal(res.message, " ", "success");
    }
    else {
      swal("Error !",""+JSON.stringify(res.message), "error");
    }

  }

  return (
    <div>
      <h4>Edit customer {id}</h4>
      <hr/>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="firstName">Name</label>
          <input type="text" class="form-control" placeholder="Name" value={name}
          onChange={(event)=>setName(event.target.value)} />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="email">Email</label>
          <input type="text" class="form-control" placeholder="Email" value={email}
          onChange={(event)=>setEmail(event.target.value)} />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="address">Address</label>
          <input type="text" class="form-control" placeholder="Address" value={address}
          onChange={(event)=>setAddress(event.target.value)} />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="address">Phone </label>
          <input type="text" class="form-control" placeholder="Phone" value={phone}
          onChange={(event)=>setPhone(event.target.value)} />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <button onClick={()=>onClickUpdate()}
          class="btn btn-primary btn-block" type="submit">Save</button>
        </div>
      </div>
    </div>
  )

}

export default Edit;
