const axios = require("axios");
// const {character} = require('../db');
const {Characters} = require("../db");
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
      char.data.results.map((char) => {
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
  } catch (error) {
    return { error: error.message };
  }
};

const saveApiData = async () => {
  try {
    const allCharacters = await getApiData();
    await Characters.bulkCreate(allCharacters);
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = { saveApiData };
