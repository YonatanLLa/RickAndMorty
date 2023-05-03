const { Favorites } = require("../db");

const deleteFavorite = async (id) => {
  console.log(id);
  try {
    const deleteFav = await Favorites.findByPk(id);
    deleteFav.destroy();
    return "Favorite eliminado";
  } catch (error) {
    return { error: error.message };
  }
};
module.exports = deleteFavorite;
