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
const getAllChars = require("../Controllers/character/getAllchars");
const getCharById = require("../Controllers/character/getCharById");
const handlerChar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allCharacters = yield getAllChars();
        res.status(200).json(allCharacters);
    }
    catch (error) {
        res.status(400).json(error.message);
    }
});
const handlerCharById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const getById = yield getCharById(id);
        res.status(200).json(getById);
    }
    catch (error) {
        res.status(400).json(error.message);
    }
});
module.exports = { handlerChar, handlerCharById };
