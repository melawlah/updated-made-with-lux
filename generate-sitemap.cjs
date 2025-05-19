// generate-sitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { Readable } = require('stream');

const links = [
  { url: '/', changefreq: 'monthly', priority: 1.0 },
];

const sitemap = new SitemapStream({ hostname: 'https://madewithlux.com' });

streamToPromise(Readable.from(links).pipe(sitemap)).then((data) => {
  createWriteStream('./public/sitemap.xml').write(data.toString());
});
