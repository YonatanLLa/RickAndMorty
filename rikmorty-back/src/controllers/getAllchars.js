const {Characters} = require("../db")

const getAllChars = async() => {
  try {
    const allCharacters = await Characters.findAll();
    return allCharacters
  } catch (error) {
    return { error: error.message}
  }
}

module.exports = getAllChars;