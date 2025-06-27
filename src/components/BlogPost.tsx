
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { portfolioConfig } from '../config/portfolioConfig';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = portfolioConfig.blog.posts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#F7E8D6] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-[#333446] mb-4">Post Not Found</h1>
          <Link to="/" className="text-[#7F8CAA] hover:text-[#333446] transition-colors">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7E8D6]">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[#7F8CAA] hover:text-[#333446] transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>
        
        <article className="glass-effect rounded-3xl overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-64 md:h-96 object-cover"
          />
          
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-6 mb-6 text-[#7F8CAA]">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-light text-[#333446] mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div 
              className="prose prose-lg max-w-none text-[#7F8CAA] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
