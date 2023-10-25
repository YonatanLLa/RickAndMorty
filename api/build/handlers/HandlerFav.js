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
// favRouter
const postFavorite = require("../Controllers/favoirte/postFavorite");
const getAllFavorite = require("../Controllers/favoirte/getAllFavorite");
const deleteFavorite = require("../Controllers/favoirte/deleteFavorite");
const potsHandlerFav = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        // console.log(id);
        // const { name, species, gender, image, id } = req.body;
        const postFav = yield postFavorite(id);
        res.status(200).json(postFav);
    }
    catch (error) {
        res.status(400).json(error.message);
    }
});
const getHandlerFav = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getAllFav = yield getAllFavorite();
        res.status(200).json(getAllFav);
    }
    catch (error) {
        res.status(400).json(error.message);
    }
});
const deleteHandlerFav = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deleteFav = yield deleteFavorite(id);
        res.status(200).json(deleteFav);
    }
    catch (error) {
        res.status(400).json(error.message);
    }
});
module.exports = { potsHandlerFav, getHandlerFav, deleteHandlerFav };
