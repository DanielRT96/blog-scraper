const express = require('express');
const cors = require('cors');
const amountOfPagesToScrape = require('./scraper/scraper');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(cors());

app.post('/scrape', async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  const numberOfPages = req.body.numberOfPages;
  let results = await amountOfPagesToScrape(numberOfPages);
  res.send(results);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
