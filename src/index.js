const express = require("express");
const savephoto = require("./savephoto");
const createCollection = require("./createCollection");
const face = require("./face");

const app = express();

app.listen({ port: 1234 }, () => console.log("API rodando"));

app.get("/createCollection", createCollection); // Rota que cria a collection pra colocar as faces
app.get("/savephoto", savephoto); // Rota que salva a foto de uma pessoa na collection
app.get("/face", face); // Rota que compara uma foto nova ( que já está no S3) com as fotos da colletion
