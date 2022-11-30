const express = require("express");
const bodyParser = require("body-parser");
var app = express();
const gTTS = require("gtts");

app.use(bodyParser.json());
app.use("/public", express.static("public"));

app.post("/audio", async (req, res) => {
  try {
    var gtts = new gTTS(req.body.texto, "pt");
    const filePath = `./public/${req.body.titulo}.mp3`;

    gtts.save(filePath, async function (err, result) {
      if (err) {
        throw new Error(err);
      }
      res.status(200);
      res.send({ mensagem: "Áudio criado" });
    });
  } catch (erro) {
    console.log(erro);
  }
});

app.listen(process.env.PORT, () => console.log("Api rodando"));
