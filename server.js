const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json([
    {
      type: "video",
      url: "https://files.catbox.moe/8x612x.mp4",
      durationInSeconds: 10
    },
    {
      type: "video",
      url: "https://files.catbox.moe/w2piej.mp4",
      durationInSeconds: 10
    },
  ]);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("API radi na portu " + port));
