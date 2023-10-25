import {Router} from 'express'
import {potsHandlerFav, getHandlerFav, deleteHandlerFav} from '../handlers/HandlerFav'

const favRouter = Router();

favRouter.post("/:id", potsHandlerFav);
favRouter.get("/", getHandlerFav)
favRouter.delete("/:id", deleteHandlerFav)


export default favRouter;
