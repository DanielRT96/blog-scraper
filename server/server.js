const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(cors());

app.post('/scrape', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  console.log(req.body);
  res.send('Done');
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
