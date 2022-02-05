const express = require("express");
const cors = require("cors");
const amountOfPagesToScrape = require("./scraper/scraper");
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(cors());

app.post("/scrape", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const numberOfPages = req.body.numberOfPages;
  try {
    let results = await amountOfPagesToScrape(numberOfPages);
    res.send(results);
  } catch (error) {
    res.status(503).send();
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
