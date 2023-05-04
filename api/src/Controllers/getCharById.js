// const axios = require("axios");

// const API = "https://rickandmortyapi.com/api/character";

const {Characters} = require("../db")

const getCharById = async (id) => {
  // const response = await axios(API + "/" + id);
  //   return {
  //     id:response.data.id,
  //     name:response.data.name,
  //     status:response.data.status,
  //     species:response.data.species,
  //     gender:response.data.gender,
  //     image:response.data.image,
  //     origin: response.data.origin?.name,
  //   };
  const getAllCharracter = await Characters.findByPk(id)
  return getAllCharracter

};
module.exports = getCharById;
