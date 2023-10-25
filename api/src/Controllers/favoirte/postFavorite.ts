const { Favorites, Characters } = require("../../db");
const postFavorite = async (id: string) => {
  try {

    const personajeFav = await Characters.findByPk(id)

    console.log(personajeFav);
    // if (!name || !species || !gender || !image)
    //   throw new Error("Faltan datos");
    const createFavorite = await Favorites.create({
      name: personajeFav.name,
      species: personajeFav.species,
      gender: personajeFav.gender,
      image: personajeFav.image,
      id: personajeFav.id,
      origin: personajeFav.origin
    });
    return createFavorite;
  } catch (error: any) {
    return { error: error.message };
  }
};
export default postFavorite;
