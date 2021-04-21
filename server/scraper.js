const axios = require('axios');
const cheerio = require('cheerio');
const blogScraper = require('./blogScraper');

async function start() {
  numberOfPages = 1;
  const url = `https://blog.risingstack.com/page/${numberOfPages}`;
  async function fetchHTML(url) {
    const { data } = await axios.get(url);
    return cheerio.load(data);
  }

  const $ = await fetchHTML(url);

  const list = [];
  $('article').each(function () {
    list.push($(this).find('a').attr('href'));
  });
  return Promise.all(
    list.map((url) => {
      return blogScraper('https://blog.risingstack.com/' + url);
    })
  );
}
start().then((urls) => {
  console.log(
    urls.filter((el) => {
      return el !== undefined;
    })
  );
});
