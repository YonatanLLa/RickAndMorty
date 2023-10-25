const axios = require("axios");
const {Characters} = require("../../db");

import { CharacterAtributes } from "../../interface/chareacter"


 const getApiData = async () => {
  try {
    let character = [];
    let i = 1;
    while (i < 6) {
      let apiData = await axios(
        `https://rickandmortyapi.com/api/character?page=${i}`
      );
      character.push(apiData);
      i++;
    }
    character = (await Promise.all(character)).map((char) =>
      char.data.results.map((char: CharacterAtributes) => {
        return {
          id: char.id,
          name: char.name,
          status: char.status,
          species: char.species,
          gender: char.gender,
          origin: char.origin?.name,
          image: char.image,
        };
      })
    );
    return character.flat();
  } catch (error: any) {
    return { error: error.message };
  }
};

export const saveApiData = async () => {
  try {
    const allCharacters = await getApiData();
    await Characters.bulkCreate(allCharacters);
    return
  } catch (error: any) {
    return { error: error.message };
  }
};

