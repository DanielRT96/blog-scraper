const axios = require('axios');
const cheerio = require('cheerio');

const blogScraper = async (url) => {
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

  if (numberOfPictures === 0) {
    return {
      blog: url,
    };
  }
};
module.exports = blogScraper;
