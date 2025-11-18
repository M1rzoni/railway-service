const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json([
    {
      type: "image",
      url: "https://vimeo.com/1138000679?share=copy&fl=sv&fe=ci",
      durationInSeconds: 3
    },
    {
      type: "video",
      url: "https://example.com/video1.mp4"
    },
    {
      type: "image",
      url: "https://example.com/slika2.jpg",
      durationInSeconds: 5
    }
  ]);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("API radi na portu " + port));
