// favRouter
const postFavorite = require("../Controllers/postFavorite")
const getAllFavorite = require("../Controllers/getAllFavorite")
const deleteFavorite = require("../Controllers/deleteFavorite")

const potsHandlerFav = async (req, res) => {
  console.log(req.body);
  try {
    const { name, species, gender, image, id } = req.body;
    const postFav = await postFavorite(
      name,
      species,
      gender,
      image,
      id
    );
    res.status(200).json(postFav);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getHandlerFav = async (req, res) => {
  try {
    const getAllFav = await getAllFavorite()
    res.status(200).json(getAllFav)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

const deleteHandlerFav = async(req, res) => {
  try {
    const {id} = req.params
    const deleteFav = await deleteFavorite(id)
    res.status(200).json(deleteFav)
  } catch (error) {
    res.status(400).json(error.message)
  }
}


module.exports = {potsHandlerFav, getHandlerFav, deleteHandlerFav};
