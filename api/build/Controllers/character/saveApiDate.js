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
const axios = require("axios");
const { Characters } = require("../../db");
const getApiData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let character = [];
        let i = 1;
        while (i < 6) {
            let apiData = yield axios(`https://rickandmortyapi.com/api/character?page=${i}`);
            character.push(apiData);
            i++;
        }
        character = (yield Promise.all(character)).map((char) => char.data.results.map((char) => {
            var _a;
            return {
                id: char.id,
                name: char.name,
                status: char.status,
                species: char.species,
                gender: char.gender,
                origin: (_a = char.origin) === null || _a === void 0 ? void 0 : _a.name,
                image: char.image,
            };
        }));
        return character.flat();
    }
    catch (error) {
        return { error: error.message };
    }
});
const saveApiData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allCharacters = yield getApiData();
        yield Characters.bulkCreate(allCharacters);
    }
    catch (error) {
        return { error: error.message };
    }
});
module.exports = { saveApiData };
