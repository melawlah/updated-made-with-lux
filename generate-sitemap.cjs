// // generate-sitemap.js
// const { SitemapStream, streamToPromise } = require('sitemap');
// const { createWriteStream } = require('fs');
// const { Readable } = require('stream');

// const links = [
//   { url: '/', changefreq: 'monthly', priority: 1.0 },
// ];

// const sitemap = new SitemapStream({ hostname: 'https://madewithlux.com' });

// streamToPromise(Readable.from(links).pipe(sitemap)).then((data) => {
//   createWriteStream('./public/sitemap.xml').write(data.toString());
// });


// generate-sitemap.cjs
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { Readable } = require('stream');

const hostname = 'https://madewithlux.com';

const links = [
  { url: '/', changefreq: 'monthly', priority: 1.0 },
  { url: '/web-design-toronto', changefreq: 'monthly', priority: 0.8 },
  { url: '/web-design-kitchener', changefreq: 'monthly', priority: 0.8 },
  { url: '/web-design-vancouver', changefreq: 'monthly', priority: 0.8 },
  { url: '/web-design-montreal', changefreq: 'monthly', priority: 0.8 },
  { url: '/web-design-calgary', changefreq: 'monthly', priority: 0.8 },
  { url: '/web-design-ottawa', changefreq: 'monthly', priority: 0.8 },
  { url: '/web-design-edmonton', changefreq: 'monthly', priority: 0.8 },
  { url: '/web-design-halifax', changefreq: 'monthly', priority: 0.8 },
  { url: '/blog', changefreq: 'weekly', priority: 0.6 },
  // Add individual blog posts like:
  // { url: '/blog/some-post-title', changefreq: 'monthly', priority: 0.6 },
];

const sitemap = new SitemapStream({ hostname });

streamToPromise(Readable.from(links).pipe(sitemap)).then((data) => {
  createWriteStream('./public/sitemap.xml').write(data.toString());
  console.log('✅ Sitemap successfully generated!');
});
