const axios = require('axios');
const cheerio = require('cheerio');
const blogScraper = require('./blogScraper');

const scrapePages = async (url, lastPage) => {
  async function fetchHTML(url) {
    try {
      const { data } = await axios.get(url);
      return cheerio.load(data);
    } catch (err) {
      return cheerio.load(err.response.data);
    }
  }

  const $ = await fetchHTML(url);

  let blogsToScrape = [];
  $('article').each(function () {
    blogsToScrape.push($(this).find('a').attr('href'));
  });

  const blogsHaveNoImage = await Promise.all(
    blogsToScrape.map((url) => {
      return blogScraper('https://blog.risingstack.com/' + url);
    })
  );

  if (blogsToScrape.length < 1) {
    return blogsHaveNoImage;
  } else {
    const nextPageNumber = parseInt(url.match(/\page\/(\d+)$/)[1], 10) + 1;
    const nextUrl = `https://blog.risingstack.com/page/${nextPageNumber}`;
    if (nextPageNumber > lastPage) {
      return blogsHaveNoImage;
    } else {
      return blogsHaveNoImage.concat(await scrapePages(nextUrl, lastPage));
    }
  }
};

const amountOfPagesToScrape = async (numberOfPages) => {
  const firstUrl = 'https://blog.risingstack.com/page/1';

  const data = await scrapePages(firstUrl, numberOfPages).then((urls) => {
    const filteredBlogs = urls.filter((el) => {
      return el !== undefined;
    });
    return filteredBlogs;
  });
  return data;
};

module.exports = amountOfPagesToScrape;
