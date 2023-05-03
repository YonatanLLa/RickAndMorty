const { Router } = require("express");
const {handlerChar,handlerCharById} = require("../handlers/HandlerChar");
const allCharRouter = Router();

// allCharRouter.post("/", )
allCharRouter.get("/",handlerChar);
allCharRouter.get("/:id",handlerCharById);


module.exports = allCharRouter;
