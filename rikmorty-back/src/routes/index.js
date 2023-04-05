const { Router } = require("express");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
let { characters, personajes } = require("../utils/favs");
const app = Router();

// --> onsearch <--
app.get("/onsearch/:id", getCharById);

app.post("/onsearch/filter/:id", (req, res) => {
  personajes.push(req.params);
  // console.log(personajes);
  res.status(200).json({ dato: "Dato pusheado" });
});

app.get("/onsearch/filter/datos", (req, res) => {
  req.query.status === "Asendente"
    ? res.status(200).json(personajes.sort((a, b) => a.id - b.id))
    : res.status(200).json(personajes.sort((a, b) => b.id - a.id));
});



// --> onsearch <--
//* --> deail <--

app.get("/detail/:id", getCharDetail);

// ---------------------
app.post("/rickandmorty/fav", (req, res) => {
  console.log(req.body);
  characters.push(req.body);
  res.status(200).json({ "res:": "pusheado" });
});
app.get("/rickandmorty/fav", (req, res) => {
  res.status(200).json(characters);
});
app.delete("/rickandmorty/fav/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  characters = characters.filter((char) => char.id != id);

  console.log(characters);
  res.status(200).json({ state: "okkk" });
});

module.exports = app;
