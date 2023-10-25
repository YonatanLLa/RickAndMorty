const { Favorites } = require("../../db");


const deleteFavorite = async (id: string) => {
  console.log(id);
  try {
    const deleteFav = await Favorites.findByPk(id);
    deleteFav.destroy();
    return "Favorite eliminado";
  } catch (error: any) {
    return { error: error.message };
  }
};
export default deleteFavorite;
