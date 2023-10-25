// favRouter
import postFavorite from "../Controllers/favoirte/postFavorite"
import getAllFavorite from "../Controllers/favoirte/getAllFavorite"
import deleteFavorite from "../Controllers/favoirte/deleteFavorite"
import {Request, Response} from "express"

export const potsHandlerFav = async (req: Request, res: Response) => {
  try {
    const {id} = req.params

    // console.log(id);

    // const { name, species, gender, image, id } = req.body;
    const postFav = await postFavorite(id);
    res.status(200).json(postFav);
  } catch (error: any) {
    res.status(400).json(error.message);
  }
};

export const getHandlerFav = async (_req: Request, res: Response) => {
  try {
    const getAllFav = await getAllFavorite()
    res.status(200).json(getAllFav)
  } catch (error: any) {
    res.status(400).json(error.message)
  }
}

export const deleteHandlerFav = async(req: Request, res: Response) => {
  try {
    const {id} = req.params
    const deleteFav = await deleteFavorite(id)
    res.status(200).json(deleteFav)
  } catch (error: any) {
    res.status(400).json(error.message)
  }
}


module.exports = {potsHandlerFav, getHandlerFav, deleteHandlerFav};
