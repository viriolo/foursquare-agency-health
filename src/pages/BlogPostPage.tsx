import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { getBlogPostBySlug, BlogPost } from '../lib/contentful';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      
      try {
        setLoading(true);
        const data = await getBlogPostBySlug(slug);
        setPost(data);
      } catch (err) {
        setError('Failed to fetch blog post');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded mb-8 w-1/4"></div>
            <div className="h-12 bg-gray-300 rounded mb-4"></div>
            <div className="h-6 bg-gray-300 rounded mb-8 w-1/2"></div>
            <div className="h-64 bg-gray-300 rounded mb-8"></div>
            <div className="space-y-4">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="h-4 bg-gray-300 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
          <Link
            to="/blog"
            className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const imageUrl = post.fields.featuredImage?.fields.file.url;
  const publishDate = new Date(post.fields.publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const shareUrl = window.location.href;
  const shareTitle = post.fields.title;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-red-600 hover:text-red-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Article */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-8">
            <div className="mb-4">
              <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.fields.category}
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.fields.title}
            </h1>
            
            <div className="flex items-center space-x-6 text-gray-600 mb-6">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>{publishDate}</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>{post.fields.author}</span>
              </div>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {post.fields.excerpt}
            </p>

            {/* Tags */}
            {post.fields.tags && post.fields.tags.length > 0 && (
              <div className="flex items-center space-x-2 mb-8">
                <Tag className="h-5 w-5 text-gray-400" />
                <div className="flex flex-wrap gap-2">
                  {post.fields.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </header>

          {/* Featured Image */}
          {imageUrl && (
            <div className="mb-8">
              <img
                src={`https:${imageUrl}`}
                alt={post.fields.title}
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div 
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.fields.content.replace(/\n/g, '<br />') }}
            />
          </div>

          {/* Share Buttons */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Share2 className="h-5 w-5 text-gray-400" />
                <span className="text-gray-600 font-medium">Share this post:</span>
              </div>
              
              <div className="flex space-x-4">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-500 transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-800 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};