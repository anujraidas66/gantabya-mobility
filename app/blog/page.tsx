
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
            Blog &<span className="bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">  News</span>
          </h2>
          
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
          {/* <button
            className="px-6 py-3 bg-green-500 text-black font-semibold rounded-lg
                       hover:bg-green-400 transition-all shadow-lg"
          >
            View All Articles
          </button> */}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;