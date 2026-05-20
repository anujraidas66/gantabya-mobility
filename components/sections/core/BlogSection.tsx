// import React from 'react';

// const BlogSection: React.FC = () => {
//   const blogPosts = [
//     {
//       category: 'Industry',
//       title: 'The Future of EVs in Nepal',
//       description: 'How electric vehicles are reshaping transportation in the Himalayas.',
//       date: 'Jan 15, 2024',
//       tagColor: 'bg-blue-100',
//       tagTextColor: 'text-blue-800',
//     },
//     {
//       category: 'Tips',
//       title: '5 Tips for Battery Longevity',
//       description: 'Maximize your electric motorcycle\'s battery life with these expert tips.',
//       date: 'Mar 8, 2026',
//       tagColor: 'bg-green-100',
//       tagTextColor: 'text-green-800',
//     },
//     {
//       category: 'News',
//       title: 'Nepal\'s Growing Charging Network',
//       description: 'New charging stations are making long-distance EV travel possible.',
//       date: 'Feb 28, 2026',
//       tagColor: 'bg-purple-100',
//       tagTextColor: 'text-purple-800',
//     },
//     {
//       category: 'Tips',
//       title: 'EV Riding: What You Need to Know',
//       description: 'Mastering the slopes of Nepal on an electric motorcycle.',
//       date: 'Jan 15, 2024',
//       tagColor: 'bg-green-100',
//       tagTextColor: 'text-green-800',
//     },
//     {
//       category: 'Company',
//       title: 'Gantabya 2025: Year in Review',
//       description: 'A look back at our biggest milestones and what\'s coming next.',
//       date: 'Mar 8, 2026',
//       tagColor: 'bg-orange-100',
//       tagTextColor: 'text-orange-800',
//     },
//     {
//       category: 'News',
//       title: 'How Much CO₂ Are We Saving?',
//       description: 'The environmental impact of 5,000+ Gantabya bikes on Nepal\'s roads.',
//       date: 'Jan 5, 2026',
//       tagColor: 'bg-purple-100',
//       tagTextColor: 'text-purple-800',
//     },
//   ];

//   return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto px-4 md:px-6">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Blog & News</h2>
//           <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
//         </div>

//         {/* Blog Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
//           {blogPosts.map((post, index) => (
//             <article
//               key={index}
//               className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100"
//             >
//               <div className="p-5">
//                 {/* Category Tag */}
//                 <div className="mb-3">
//                   <span
//                     className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${post.tagColor} ${post.tagTextColor}`}
//                   >
//                     {post.category}
//                   </span>
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
//                   {post.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-gray-600 text-sm mb-4 line-clamp-2">
//                   {post.description}
//                 </p>

//                 {/* Date and Read More */}
//                 <div className="flex items-center justify-between pt-2 border-t border-gray-100">
//                   <div className="flex items-center text-gray-400 text-sm">
//                     <svg
//                       className="w-4 h-4 mr-1"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                       ></path>
//                     </svg>
//                     <span>{post.date}</span>
//                   </div>
//                   <a
//                     href="#"
//                     className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200 inline-flex items-center group"
//                   >
//                     Read More
//                     <svg
//                       className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M9 5l7 7-7 7"
//                       ></path>
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* View All Button */}
//         <div className="text-center mt-12">
//           <button className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm">
//             View All Articles
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogSection;













'use client'

import React from 'react';

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      category: 'Industry',
      title: 'The Future of EVs in Nepal',
      description: 'How electric vehicles are reshaping transportation in the Himalayas.',
      date: 'Jan 15, 2024',
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
    },
    {
      category: 'Tips',
      title: '5 Tips for Battery Longevity',
      description: "Maximize your electric motorcycle's battery life with expert tips.",
      color: 'text-green-400',
      bg: 'bg-green-500/10',
    },
    {
      category: 'News',
      title: "Nepal's Growing Charging Network",
      description: 'New charging stations are making long-distance EV travel possible.',
      date: 'Feb 28, 2026',
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
    },
    {
      category: 'Tips',
      title: 'EV Riding: What You Need to Know',
      description: 'Mastering the slopes of Nepal on an electric motorcycle.',
      date: 'Jan 15, 2024',
      color: 'text-green-400',
      bg: 'bg-green-500/10',
    },
    {
      category: 'Company',
      title: 'Gantabya 2025: Year in Review',
      description: "A look back at our biggest milestones and what's coming next.",
      date: 'Mar 8, 2026',
      color: 'text-orange-400',
      bg: 'bg-orange-500/10',
    },
    {
      category: 'News',
      title: 'How Much CO₂ Are We Saving?',
      description: 'Environmental impact of 5,000+ EV bikes in Nepal.',
      date: 'Jan 5, 2026',
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
    },
  ];

  return (
    <section className="py-20 bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-3">
            Blog & <span className="text-green-500">News</span>
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-[#111111] border border-gray-800 rounded-xl p-5
                         hover:border-green-500/40 hover:shadow-[0_0_30px_rgba(34,197,94,0.08)]
                         transition-all duration-300 group"
            >

              {/* CATEGORY */}
              <div className="mb-3">
                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-full ${post.bg} ${post.color}`}
                >
                  {post.category}
                </span>
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                {post.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {post.description}
              </p>

              {/* FOOTER */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-800">

                {/* DATE */}
                <div className="flex items-center text-gray-500 text-xs">
                  <svg
                    className="w-4 h-4 mr-1 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {post.date}
                </div>

                {/* READ MORE */}
                <a
                  href="#"
                  className="text-green-400 text-sm font-medium flex items-center gap-1
                             group-hover:gap-2 transition-all"
                >
                  Read More
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* BUTTON */}
        <div className="text-center mt-12">
          <button
            className="px-6 py-3 bg-green-500 text-black font-semibold rounded-lg
                       hover:bg-green-400 transition-all shadow-lg"
          >
            View All Articles
          </button>
        </div>

      </div>
    </section>
  );
};

export default BlogSection;