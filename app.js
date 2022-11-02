const express = require("express");
const { upload } = require("./middlewares/validar-Archivos");
const { validarCampos } = require("./middlewares/validar-campos");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
//ESTO ES LO IMPORTANTE
app.post("/file", [upload, validarCampos], (req, res) => {
  console.log(req.files);
  if (req.files.length < 1) {
    return res.json({ errors: "Seleccionar un archivo correcto" });
  }
  res.json({ msg: "TODO BIEN" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
