const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeBlog() {
  let numberOfPages = 1;
  const url = `https://blog.risingstack.com/page/${numberOfPages}`;

  async function fetchHTML(url) {
    const { data } = await axios.get(url);
    return cheerio.load(data);
  }

  const $ = await fetchHTML(url);

  const list = [];
  $('article').each(function (i, el) {
    list.push($(this).find('a').attr('href'));
  });
  console.log(list);
}
module.exports = scrapeBlog();
