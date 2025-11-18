const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json([
    {
      type: "video",
      url: "https://www.shutterstock.com/shutterstock/videos/3823932579/preview/stock-footage-back-view-of-woman-entering-turquoise-water-at-maya-bay-koh-phi-phi-a-concept-of-luxury-vacation.mp4",
      durationInSeconds: 10
    },
    {
      type: "video",
      url: "https://www.shutterstock.com/shutterstock/videos/3771633729/preview/stock-footage-business-people-tablet-or-manager-shaking-hands-for-corporate-funding-agreement-or-b-b-deal.webm",
      durationInSeconds: 3
    },
    {
      type: "video",
      url: "https://example.https://www.shutterstock.com/shutterstock/videos/3818181037/preview/stock-footage-close-up-trader-or-investor-using-smartphone-for-real-time-stock-market-monitoring-with.webm/",
      durationInSeconds: 10
    },
    {
      type: "image",
      url: "https://www.shutterstock.com/image-photo/vertical-image-collage-shocked-businessman-600w-2448440215.jpg",
      durationInSeconds: 5
    }
  ]);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("API radi na portu " + port));
