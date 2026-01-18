import React from 'react';
import Section from './Section';
import Placeholder from './Placeholder';
import { SOCIAL_METRICS, SOCIAL_POSTS } from '../constants';

const SocialMedia: React.FC = () => {
  // Helper function to get social media post image paths
  const getSocialPostImagePath = (postId: string, platform: string, type: string) => {
    const platformLower = platform.toLowerCase();
    if (postId === 'p1') {
      // Instagram Reel - Financial Literacy Campaign
      return `/images/social-media/${platformLower}/reel-financial-literacy-campaign.jpg`;
    } else if (postId === 'p2') {
      // Instagram Carousel - Event Highlights
      return `/images/social-media/${platformLower}/carousel-event-highlights.jpg`;
    } else if (postId === 'p3') {
      // LinkedIn Post - Reflecting on Head of Publicity
      return `/images/social-media/${platformLower}/post-reflecting-head-of-publicity.jpg`;
    }
    return '';
  };

  return (
    <Section id="social" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left: Metrics & Info */}
        <div className="lg:col-span-4 space-y-8">
          <div>
            <h2 className="font-serif text-3xl text-stone-900 mb-4">Social & Content</h2>
            <p className="text-stone-500 leading-relaxed">
              Driving engagement through strategic content creation and community management.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {SOCIAL_METRICS.map((metric, idx) => (
              <div key={idx} className="p-6 bg-stone-50 border border-stone-100">
                <span className="block text-3xl font-serif text-stone-900 mb-1">{metric.value}</span>
                <span className="text-xs font-mono uppercase tracking-widest text-stone-400">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Content Grid */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SOCIAL_POSTS.map((post) => (
              <div key={post.id} className="group cursor-pointer">
                <div className="aspect-[9/16] mb-3">
                   <Placeholder 
                     label={`${post.platform} ${post.type}`} 
                     icon={post.type === 'Reel' ? 'video' : 'image'} 
                     src={getSocialPostImagePath(post.id, post.platform, post.type)}
                     alt={post.caption}
                   />
                </div>
                <h4 className="text-sm font-medium text-stone-900 group-hover:text-stone-600 transition-colors line-clamp-2">
                  {post.caption}
                </h4>
                <span className="text-xs text-stone-400 font-mono mt-1 block">{post.platform}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
};

export default SocialMedia;