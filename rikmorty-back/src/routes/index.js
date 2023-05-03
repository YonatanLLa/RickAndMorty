const {Router} = require('express');

// Importar todas los routes
const AllCharRouter = require('./allCharRouter')
const favRouter = require("./allFavRouter")


const router = Router();


// Configurar las rutas

router.use('/rickandmorty/allCharacter', AllCharRouter)
router.use("/rickandmorty/fav", favRouter)
module.exports = router;