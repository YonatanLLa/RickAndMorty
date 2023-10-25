import { Router } from "express";

// Importar todas los routes
import AllCharRouter from "./allCharRouter"
import favRouter from './allFavRouter'


const router = Router();


// Configurar las rutas

router.use('/allCharacter', AllCharRouter)
router.use("/fav", favRouter)
export default router;