import {Router} from 'express'
import {handlerChar,handlerCharById} from "../handlers/HandlerChar"
const allCharRouter = Router();

// allCharRouter.post("/", )
allCharRouter.get("/",handlerChar);
allCharRouter.get("/:id",handlerCharById);


export default allCharRouter;
