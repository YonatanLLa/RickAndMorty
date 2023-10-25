"use strict";
const { Router } = require('express');
// Importar todas los routes
const AllCharRouter = require('./allCharRouter');
const favRouter = require("./allFavRouter");
const router = Router();
// Configurar las rutas
router.use('/allCharacter', AllCharRouter);
router.use("/fav", favRouter);
module.exports = router;
