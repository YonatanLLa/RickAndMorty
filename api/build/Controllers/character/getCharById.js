"use strict";
// const axios = require("axios");
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// const API = "https://rickandmortyapi.com/api/character";
const { Characters } = require("../../db");
const getCharById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // const response = await axios(API + "/" + id);
    //   return {
    //     id:response.data.id,
    //     name:response.data.name,
    //     status:response.data.status,
    //     species:response.data.species,
    //     gender:response.data.gender,
    //     image:response.data.image,
    //     origin: response.data.origin?.name,
    //   };
    const getAllCharracter = yield Characters.findByPk(id);
    return getAllCharracter;
});
module.exports = getCharById;
