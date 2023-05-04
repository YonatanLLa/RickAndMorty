const { Router } = require("express");
const {potsHandlerFav} = require("../handlers/HandlerFav");
const {getHandlerFav} = require("../handlers/HandlerFav")
const {deleteHandlerFav} = require("../handlers/HandlerFav")

const favRouter = Router();

favRouter.post("/", potsHandlerFav);
favRouter.get("/", getHandlerFav)
favRouter.delete("/:id", deleteHandlerFav)


module.exports = favRouter;
