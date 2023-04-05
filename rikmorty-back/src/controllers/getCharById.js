const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";
const { personajes } = require("../utils/favs");

const getCharById = (req, res) => {
  // console.log(req.params);
  const { id } = req.params;
  // console.log(id);
  axios(`${URL}${id}`)
    .then((response) => {
      const { id, image, name, gender, species } = response.data;
      let personaje = { id, image, name, gender, species }
      personajes.push(personaje)
      console.log(personajes);
      res.status(200).json( { id, image, name, gender, species });
    })
    .catch((error) => res.status(500).json({ err: error.message }));
};
module.exports = getCharById;
