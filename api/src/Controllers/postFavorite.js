const { Favorites } = require("../db");
const postFavorite = async (name, species, gender, image, id) => {
  try {
    if (!name || !species || !gender || !image)
      throw new Error("Faltan datos");
    const createFavorite = await Favorites.create({
      name,
      species,
      gender,
      image,
      id
    });
    return createFavorite;
  } catch (error) {
    return { error: error.message };
  }
};
module.exports = postFavorite;
