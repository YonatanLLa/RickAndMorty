import {Characters} from "../../db"
const getAllChars = async () => {
  try {
    const allCharacters = await Characters.findAll();
    return allCharacters;
  } catch (error: any) {
    return { error: error.message };
  }
}

export default getAllChars;