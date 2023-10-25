import getAllChars from "../Controllers/character/getAllchars"
import getCharById from "../Controllers/character/getCharById"
import {Request, Response} from 'express'

export const handlerChar = async (_req: Request, res: Response) => {
    try {
      const allCharacters = await getAllChars()
      res.status(200).json(allCharacters);
    } catch (error: any) {
      res.status(400).json(error.message);
    }
  }

export const handlerCharById = async (req: Request, res: Response) => {
  
  try {
    const {id} = req.params
    const getById = await getCharById(id)
    res.status(200).json(getById)
  } catch (error: any) {
    res.status(400).json(error.message)
  }
}



