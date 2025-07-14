// import { useParams, Link } from 'react-router-dom';
// import blogPosts from '../data/blogPosts';
// import { useTranslation } from 'react-i18next';
// import { Helmet } from 'react-helmet';
// import { FaArrowLeft } from 'react-icons/fa';


// export default function BlogPostDetail() {
//   const { slug } = useParams();
//   const { t, i18n } = useTranslation();
//   const post = blogPosts.find((p) => p.slug === slug);
//   const lang = i18n.language;
//   const translation = post?.translations?.[lang];

//   if (!post) {
//     return (
//       <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 text-center">
//         <p className="text-lg">{t('blog.notFound', 'Post not found.')}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-black text-white min-h-screen pt-32 pb-24 px-5 sm:px-10 lg:px-48">
//       {/* SEO */}
//       <Helmet>
//         <title>{post.title} | Made With Lux</title>
//         <meta name="description" content={post.excerpt} />
//         <link rel="canonical" href={`https://madewithlux.com/blog/${post.slug}`} />
//       </Helmet>

//       {/* Back to blog link */}
//       <div className="mb-10">
//         <Link
//           to="/blog"
//           className="inline-flex items-center text-sm text-gray-400 hover:text-white transition"
//         >
//           <FaArrowLeft className="mr-2 text-xs" />
//           {t('blog.back', 'Back to Blog')}
//         </Link>
//       </div>

//       {/* Post Header */}
//       <article className="prose prose-invert max-w-3xl mx-auto">
//         <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">{post.title}</h1>
//         <p className="text-sm text-gray-500 mb-8">
//           {new Date(post.date).toLocaleDateString(i18n.language, {
//             year: 'numeric',
//             month: 'long',
//             day: 'numeric',
//           })}
//         </p>

//         {/* Featured Image */}
//         {post.image && (
//           <img
//             src={post.image}
//             alt={post.title}
//             className="rounded-xl w-full h-auto mb-10 shadow-lg"
//           />
//         )}

//         {/* Post Content */}
//         <div className="text-lg leading-relaxed text-gray-300 space-y-6">
//           {post.content.map((paragraph, index) => (
//             <p key={index}>{paragraph}</p>
//           ))}
//         </div>
//       </article>
//     </div>
//   );
// }


import { useParams, Link } from 'react-router-dom';
import blogPosts from '../data/blogPosts';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { FaArrowLeft } from 'react-icons/fa';

export default function BlogPostDetail() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const post = blogPosts.find((p) => p.slug === slug);
  const translation = post?.translations?.[lang];

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 text-center">
        <p className="text-lg">{t('blog.notFound', 'Post not found.')}</p>
      </div>
    );
  }

  const title = translation?.title || post.title;
  const excerpt = translation?.excerpt || post.excerpt;
  const content = translation?.content || post.content;

  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24 px-5 sm:px-10 lg:px-48">
      {/* SEO */}
      <Helmet>
        <title>{title} | Made With Lux</title>
        <meta name="description" content={excerpt} />
        <link rel="canonical" href={`https://madewithlux.com/blog/${post.slug}`} />
      </Helmet>

      {/* Back to blog link */}
      <div className="mb-10">
        <Link
          to="/blog"
          className="inline-flex items-center text-sm text-gray-400 hover:text-white transition"
        >
          <FaArrowLeft className="mr-2 text-xs" />
          {t('blog.back', 'Back to Blog')}
        </Link>
      </div>

      {/* Post Header */}
      <article className="prose prose-invert max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">{title}</h1>
        <p className="text-sm text-gray-500 mb-8">
          {new Date(post.date).toLocaleDateString(lang, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>

        {/* Featured Image */}
        {post.image && (
          <img
            src={post.image}
            alt={title}
            className="rounded-xl w-full h-auto mb-10 shadow-lg"
          />
        )}

        {/* Post Content */}
        <div className="text-lg sm:text-xl leading-8 sm:leading-9 text-gray-300 tracking-normal space-y-7 max-w-2xl mx-auto">
          {(content || []).map((paragraph, index) => (
            // <p key={index} >{paragraph}</p>
              <p 
                key={index} 
                dangerouslySetInnerHTML={{ __html: paragraph }} 
                />
          ))}
        </div>
      </article>
    </div>
  );
}
