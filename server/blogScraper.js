const axios = require('axios');
const cheerio = require('cheerio');

const blogScraper = (url) => {
  async function fetchHTML(url) {
    const { data } = await axios.get(url);
    return cheerio.load(data);
  }

  const $ = await fetchHTML(url);

  const numberOfPictures = $('.post-content')
    .each(function (i, el) {
      $(el).find('.post-author, .share-container, iframe').remove();
    })
    .find('img').length;

  console.log(numberOfPictures);

  if( numberOfPictures === 0) {
    return url;
  }
}
module.exports = blogScraper;
