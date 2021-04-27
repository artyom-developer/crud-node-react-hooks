const controller = {}

// import model
var Customers = require('../models/Customer');

controller.index = ( req, res ) => {

  const data = {
    message: "Developed by Artyom"
  }
  res.render('customer',data);

}

controller.testApi = async ( req, res ) => {

  // const data = {
  //   succes: true,
  //   message: "Succesful"
  // }

  const response = await Customers.findAll()
  .then(function(data){
    const res = { succes: true, data: data }
    return res;
  })
  .catch(error=>{
    const res = { succes: false, message: error }
    return res;
  })

  res.json(response);

}

controller.create = async ( req, res ) => {

  try {

    const { name, email, address, phone } = req.body;

    const response = await Customers.create({
      name: name,
      email: email,
      address: address,
      phone: phone
    })
    .then(function(data){
      const res = { succes: true, data: data, message: "Saved Succesful "}
      return res;
    })
    .catch(error=>{
      const res = { succes: false, message: error }
      return res;
    })

    res.json(response);

  } catch (e) {

    const response = { succes: false, message: e.message }
    res.json(response)

  }
}

controller.list = async ( req, res ) => {

  try {

    const response = await Customers.findAll()
    .then(function(data){
      const res = { succes: true, data: data }
      return res;
    })
    .catch(error => {
      const res = { succes: false, message: error }
      return res;
    })

    res.json(response);

  } catch (e) {

    const response = { succes: false, message: e.message }
    res.json(response)

  }
}

controller.get = async ( req, res ) => {

  try {

    const { id } = req.params;

    const response = await Customers.findOne({
      where: { id: id }
    })
    .then(function(data){
      const res =  { success: true, data: data }
      return res;
    })
    .catch(error=>{
      const res = { success: false, message: error }
      return res;
    })

    res.json(response);

  } catch (e) {

    const response = { success: false, message: e.message }
    res.json(response)

  }

}

controller.update = async ( req, res ) =>{

  try {

    // parameter get id
    const { id } = req.params;
    // parameter post
    const { name, email, address, phone } = req.body;
    // update data
    const response = await Customers.update({
      name: name,
      email: email,
      address: address,
      phone: phone
    },
    {
      where: {
        id: id
      }
    })
    .then(function(data){
      const res = { success: true, message: "Customer succesfully updated" }
      return res;
    })
    .catch(error=>{
      const res = { success: false, message: error.message }
      return res;
    })

    res.json(response)

  } catch (e) {

    const response = { success: false, message: e.message }
    res.json(response)

  }

}

module.exports = controller;
