const multer = require("multer");
const mimeTypes = require("mime-types");

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
  },
});

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    if (file.mimetype !== "application/pdf") {
      return cb(new Error("No es un archivo de pdf"))
    }
    cb(null, true);
  },
}).array("avatar");

module.exports = {
  upload,
};
