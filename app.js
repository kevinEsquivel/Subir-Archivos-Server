const express = require("express");
const multer = require("multer");
const mimeTypes = require("mime-types");

const app = express();

const port = 3000;

const storage = multer.diskStorage({
  destination: "archivos/",
  filename: (req, file, callback) => {
    callback(
      "",
      file.originalname +
        "_" +
        Date.now() +
        "." +
        mimeTypes.extension(file.mimetype)
    );
  }
});

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    if (file.mimetype !== "application/pdf") {
      return cb(new Error("No es un archivo de pdf"));
    }
    cb(null, true);
  }
}).single('avatar');

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/file", upload,(req, res) => {
  res.json({msg:"TODO BIEN",filter:upload})

});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
