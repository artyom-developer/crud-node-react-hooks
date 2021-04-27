const baseUrl = "http://localhost:3000/api/customer"
import axios from "axios";
const customer = {};

customer.save = async (data) => {
  const urlSave = baseUrl+"/create"
  const res = await axios.post(urlSave,data)
  .then(response=>{ return response.data })
  .catch(error=>{ return error; })
  return res;
}

customer.list = async () => {

  const urlList = baseUrl+"/list"
  const res = await axios.get(urlList)
  .then(response=>{ return response.data })
  .catch(error=>{ return error; })
  return res;

}

customer.get = async (id) => {

  const urlGet = baseUrl+"/get/"+id
  const res = await axios.get(urlGet)
  .then(response=>{ return response.data })
  .catch(error=>{ return error; })

  return res;

}

customer.update = async (data) => {

  const urlUpdate = baseUrl+"/update/"+data.id
  const res = await axios.put(urlUpdate,data)
  .then(response=>{ return response.data; })
  .catch(error=>{ return error; })
  return res;

}

export default customer;
