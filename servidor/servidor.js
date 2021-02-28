/*
File: cena0.js
Author: Arthur Cadore(IFSC)
Date: 28 / 02 / 2021 
*/

// [Arthur]
const express = require("express");
const app = express();

// [Arthur] Define o número da porta a utilizar para abrir o servidor 
const PORT = process.env.PORT || 4000;

// [Arthur] Define o diretório á ser importado 
app.use(express.static("../cliente"));
app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
