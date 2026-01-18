import React from 'react';
import Section from './Section';
import Placeholder from './Placeholder';
import { BLOG_POSTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Blog: React.FC = () => {
  // Helper function to get blog post cover image path
  const getBlogImagePath = (postId: string) => {
    if (postId === '1') {
      return '/images/blog/intersection-finance-storytelling.jpg';
    } else if (postId === '2') {
      return '/images/blog/navigating-ecommerce-market-entry.jpg';
    } else if (postId === '3') {
      return '/images/blog/building-brand-as-student.jpg';
    }
    return '';
  };

  return (
    <Section id="insights" className="bg-white">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">Insights</h2>
          <p className="text-stone-500 max-w-xl">Thoughts on marketing, finance, and career growth.</p>
        </div>
        <a href="#" className="hidden md:inline-flex items-center text-sm uppercase tracking-widest text-stone-600 hover:text-stone-900 transition-colors mt-4 md:mt-0 pb-1 border-b border-transparent hover:border-stone-900">
          View All Posts <ArrowUpRight size={14} className="ml-1" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <article 
            key={post.id} 
            className="group cursor-pointer flex flex-col h-full"
          >
            <div className="overflow-hidden mb-6 aspect-[3/2]">
              <Placeholder 
                label="Article Cover Image" 
                src={getBlogImagePath(post.id)}
                alt={post.title}
              />
            </div>
            
            <div className="flex-1 flex flex-col">
              <div className="flex items-center text-xs font-mono text-stone-400 mb-3 space-x-2">
                <span className="uppercase tracking-wider text-stone-500">{post.category}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              
              <h3 className="font-serif text-xl text-stone-900 mb-3 leading-tight group-hover:text-stone-600 transition-colors">
                {post.title}
              </h3>
              
              <p className="text-stone-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="pt-2">
                <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-stone-900 border-b border-stone-200 pb-1 group-hover:border-stone-900 transition-all">
                  Read Article
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
      
      <div className="mt-8 md:hidden text-center">
        <a href="#" className="inline-flex items-center text-sm uppercase tracking-widest text-stone-600 hover:text-stone-900 transition-colors">
          View All Posts <ArrowUpRight size={14} className="ml-1" />
        </a>
      </div>
    </Section>
  );
};

export default Blog;