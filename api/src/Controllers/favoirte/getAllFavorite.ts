const {Favorites} = require("../../db")

const getAllFavorite = async () => {
  const allFav = Favorites.findAll()
  return allFav
}

export default getAllFavorite