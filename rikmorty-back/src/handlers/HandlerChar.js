const getAllChars = require("../Controllers/getAllchars")
const getCharById = require("../Controllers/getCharById")

const handlerChar = async (req, res) => {
    try {
      const allCharacters = await getAllChars()
      res.status(200).json(allCharacters);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

const handlerCharById = async (req, res) => {
  
  try {
    const {id} = req.params
    const getById = await getCharById(id)
    res.status(200).json(getById)
  } catch (error) {
    res.status(400).json(error.message)
  }
}



  module.exports = {handlerChar, handlerCharById};