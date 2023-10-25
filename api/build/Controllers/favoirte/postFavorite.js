"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { Favorites, Characters } = require("../../db");
const postFavorite = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(id);
        const personajeFav = yield Characters.findByPk(id);
        console.log(personajeFav);
        // if (!name || !species || !gender || !image)
        //   throw new Error("Faltan datos");
        const createFavorite = yield Favorites.create({
            name: personajeFav.name,
            species: personajeFav.species,
            gender: personajeFav.gender,
            image: personajeFav.image,
            id: personajeFav.id,
            origin: personajeFav.origin
        });
        return createFavorite;
    }
    catch (error) {
        return { error: error.message };
    }
});
module.exports = postFavorite;
