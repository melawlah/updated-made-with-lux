// import { useTranslation } from 'react-i18next';
// import { Helmet } from 'react-helmet';
// import { Link } from 'react-router-dom';
// import blogPosts from '../data/blogPosts';
// import { motion } from 'framer-motion';

// export default function Blog() {
//   const { t, i18n } = useTranslation();

//   return (
//     <div className="bg-black min-h-screen pt-32 pb-24 px-5 sm:px-10 lg:px-24 text-white">
//       {/* SEO Meta */}
//       <Helmet>
//         <title>{t('blog.title', 'Our Blog')} | Made With Lux</title>
//         <meta
//           name="description"
//           content={t('blog.description', 'Explore insights, strategies, and design inspiration from the Made With Lux team.')}
//         />
//         <link rel="canonical" href="https://madewithlux.com/blog" />
//       </Helmet>

//       {/* Page Heading */}
//       <div className="max-w-4xl mx-auto text-center mb-20">
//         <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
//           {t('blog.heading', 'Discover Our Latest Insights')}
//         </h1>
//         <p className="text-gray-400 text-lg leading-relaxed">
//           {t('blog.subheading', 'Tips, strategies, and case studies from the world of design and digital excellence.')}
//         </p>
//       </div>

//       {/* Blog Cards */}
//       <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
//         {blogPosts.map((post, index) => (
//           <motion.div
//             key={post.slug}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1 }}
//             className="bg-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
//           >
//             <Link to={`/blog/${post.slug}`}>
//               <img
//                 src={post.image}
//                 alt={post.title}
//                 className="w-full h-52 object-cover sm:h-56 lg:h-60"
//               />
//               <div className="p-6">
//                 <p className="text-sm uppercase text-gray-500 mb-2">
//                   {new Date(post.date).toLocaleDateString(i18n.language, {
//                     year: 'numeric',
//                     month: 'short',
//                     day: 'numeric',
//                   })}
//                 </p>
//                 <h2 className="text-xl font-semibold mb-3">
//                   {post.title}
//                 </h2>
//                 <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
//                   {post.excerpt}
//                 </p>
//               </div>
//             </Link>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }


import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import blogPosts from '../data/blogPosts';
import { motion } from 'framer-motion';

export default function Blog() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'en';

  return (
    <div className="bg-black min-h-screen pt-32 pb-32 px-4 sm:px-8 md:px-12 lg:px-24 text-white">
      {/* SEO Meta */}
      <Helmet>
        <title>{t('blog.title', 'Our Blog')} | Made With Lux</title>
        <meta
          name="description"
          content={t(
            'blog.description',
            'Explore insights, strategies, and design inspiration from the Made With Lux team.'
          )}
        />
        <link rel="canonical" href="https://madewithlux.com/blog" />
      </Helmet>

      {/* Page Heading */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight leading-snug">
          {t('blog.heading', 'Discover Our Latest Insights')}
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          {t(
            'blog.subheading',
            'Tips, strategies, and case studies from the world of design and digital excellence.'
          )}
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {blogPosts.map((post, index) => {
          const localized = post.translations?.[currentLang];

          return (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-800 border border-zinc-700 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"

            >
              <Link to={`/blog/${post.slug}`} className="group block h-full">
                <img
                  src={post.image}
                  alt={localized?.title || post.title}
                  className="w-full h-52 sm:h-56 lg:h-60 object-cover transition-transform duration-300 group-hover:scale-105"

                />
                <div className="p-6">
                  <p className="text-sm uppercase text-gray-500 mb-2">
                    {new Date(post.date).toLocaleDateString(currentLang, {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </p>
                  <h2 className="text-xl font-semibold mb-3">
                    {localized?.title || post.title}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {localized?.excerpt || post.excerpt}
                  </p>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
