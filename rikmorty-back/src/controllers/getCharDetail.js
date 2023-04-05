const axios = require("axios");
const getCharDetail = (req,res ) => {
    const { id } = req.params;
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((results) => {
      console.log(results);
      const { image, name, gender, status, origin, species } = results.data;
      res.status(200).json({ image, name, gender, status, origin, species });
    })
    .catch((error) => res.status(500).json({ err: error.message }));
  };

module.exports = getCharDetail;
