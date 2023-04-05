const express = require('express');
const router = require("./routes/index")
const morgan = require('morgan');
const cors = require('cors');
// const app = require("./routes/index")
const PORT = 3001; 
const app = express();
app.use(express.json())
app.use(morgan('dev'));
app.use(cors());
app.use("/",router)


app.listen(PORT, () => {
  console.log(`La aplicación está escuchando en el puerto ${PORT}`);
});
