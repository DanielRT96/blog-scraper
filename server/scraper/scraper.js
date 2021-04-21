const axios = require('axios');
const cheerio = require('cheerio');
const blogScraper = require('./blogScraper');

(async () => {
  const scrapePages = async (url, lastPage) => {
    async function fetchHTML(url) {
      const { data } = await axios.get(url);
      return cheerio.load(data);
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
      console.log('no element on page');
      return blogsHaveNoImage;
    } else {
      blogsToScrape = [];
      const nextPageNumber = parseInt(url.match(/\page\/(\d+)$/)[1], 10) + 1;
      console.log(nextPageNumber);
      const nextUrl = `https://blog.risingstack.com/page/${nextPageNumber}`;
      if (nextPageNumber > lastPage) {
        console.log('Reached last page');
        return blogsHaveNoImage;
      } else {
        console.log('called');
        return blogsHaveNoImage.concat(await scrapePages(nextUrl, lastPage));
      }
    }
  };

  const amountOfPagesToScrape = async (numberOfPages) => {
    const firstUrl = 'https://blog.risingstack.com/page/1';

    scrapePages(firstUrl, numberOfPages).then((urls) => {
      console.log(
        urls.filter((el) => {
          return el !== undefined;
        })
      );
      console.log(urls.length);
    });
  };

  amountOfPagesToScrape(3);
})();
