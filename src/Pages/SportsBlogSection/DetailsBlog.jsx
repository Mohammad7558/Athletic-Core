import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';

const DetailsBlog = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/blogs/${slug}`)
      .then(res => {
        setPost(res.data);
        setLoading(false);
        // Fetch related posts
        return axios.get('http://localhost:5000/blogs');
      })
      .then(res => {
        setRelatedPosts(res.data.filter(p => p.slug !== slug).slice(0, 3));
      })
      .catch(() => {
        navigate('/blogs');
      });
  }, [slug, navigate]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-gray-500">Loading article...</div>
    </div>
  );

  return (
    <div className="bg-gray-50">
      <section className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link 
            to="/blogs" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Blogs
          </Link>

          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                {post.category}
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-500">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-500">{post.readTime}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center mb-8">
              <div className="flex-shrink-0 mr-4">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <div>
                <p className="text-gray-900 font-medium">{post.author}</p>
                <p className="text-gray-500 text-sm">Sports Journalist</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg mb-12">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto object-cover"
            />
            {post.imageCaption && (
              <p className="text-center text-gray-500 text-sm mt-2">{post.imageCaption}</p>
            )}
          </div>

          <article className="prose prose-lg max-w-none text-gray-700 mb-16">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">{post.excerpt}</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Warm-Ups Matter</h2>
            <p>Proper warm-up routines are the foundation of athletic performance. They prepare your body physically while also getting you in the right mental state for competition. Studies show athletes who perform dynamic warm-ups improve their performance by up to 20% compared to those who skip this crucial step.</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">The 5 Essential Warm-Up Components</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Dynamic Stretching</h3>
            <p>Dynamic stretches involve movement rather than holding positions. These exercises increase blood flow to muscles while improving range of motion. Examples include leg swings, arm circles, and walking lunges. Aim for 5-10 minutes of dynamic stretching focusing on the muscle groups you'll use most in your sport.</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2. Cardiovascular Activation</h3>
            <p>Light jogging, jumping jacks, or skipping gradually elevate your heart rate. This phase should last 5-7 minutes, enough to break a light sweat but not fatigue you before competition. The goal is to increase core temperature and prepare your cardiovascular system for intense activity.</p>
            
            <div className="bg-blue-50 p-6 rounded-xl my-8 border border-blue-100">
              <h4 className="text-lg font-bold text-blue-800 mb-3">Pro Tip</h4>
              <p className="text-blue-700">"Always match your warm-up intensity to your upcoming activity. A sprinter needs more explosive warm-up drills than a marathon runner." — Coach Sarah Johnson</p>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Sport-Specific Drills</h3>
            <p>These drills activate the exact muscle patterns you'll use in competition. Basketball players might practice defensive slides, while swimmers would do arm circles. Spend 8-10 minutes on drills that mimic your sport's movements at gradually increasing intensity.</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4. Neuromuscular Activation</h3>
            <p>Exercises like high knees, butt kicks, and agility ladder drills improve coordination between your nervous system and muscles. This phase enhances reaction time and movement efficiency. Include 3-5 minutes of quick, precise movements.</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">5. Mental Preparation</h3>
            <p>The final warm-up component happens in your mind. Use visualization techniques to imagine successful performance. Controlled breathing exercises can calm nerves and increase focus. Many elite athletes spend 2-3 minutes on mental preparation before competition.</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Sample Warm-Up Routine</h2>
            <p>Here's a 20-minute warm-up protocol you can adapt to any sport:</p>
            
            <table className="w-full my-6 border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-left">Time</th>
                  <th className="p-3 text-left">Activity</th>
                  <th className="p-3 text-left">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-3">5 min</td>
                  <td className="p-3">Light jogging</td>
                  <td className="p-3">Raise core temperature</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3">5 min</td>
                  <td className="p-3">Dynamic stretches</td>
                  <td className="p-3">Improve flexibility</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3">6 min</td>
                  <td className="p-3">Sport drills</td>
                  <td className="p-3">Movement patterns</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3">3 min</td>
                  <td className="p-3">Neuromuscular</td>
                  <td className="p-3">Coordination</td>
                </tr>
                <tr>
                  <td className="p-3">1 min</td>
                  <td className="p-3">Visualization</td>
                  <td className="p-3">Mental focus</td>
                </tr>
              </tbody>
            </table>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Common Warm-Up Mistakes</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Skipping the warm-up:</strong> Even if you're short on time, a shortened warm-up is better than none</li>
              <li><strong>Static stretching first:</strong> Save static stretches for after your workout when muscles are warm</li>
              <li><strong>Overdoing it:</strong> Your warm-up shouldn't leave you fatigued before competition begins</li>
              <li><strong>Being inconsistent:</strong> Develop a routine and stick to it for consistent results</li>
              <li><strong>Ignoring mental prep:</strong> Physical readiness alone won't maximize your performance</li>
            </ul>
            
            <div className="bg-gray-100 p-6 rounded-xl my-8">
              <h4 className="text-lg font-bold text-gray-800 mb-3">Research Findings</h4>
              <p>A 2024 study in the Journal of Sports Science found that athletes who followed a structured warm-up routine reduced their injury risk by 37% and improved performance metrics by an average of 15% compared to those using traditional warm-up methods.</p>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Final Thoughts</h2>
            <p>Your warm-up is your first performance of the day. Treat it with the same importance as your main event. By systematically preparing your body and mind, you'll compete at your highest level while reducing injury risk. Experiment to find what works best for your sport and body, then make it a non-negotiable part of your pre-competition routine.</p>
          </article>

          <div className="border-t border-gray-200 pt-12 mb-12">
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              <button className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </button>
              <button className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </button>
              <button className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
            <div className="grid gap-8 md:grid-cols-3">
              {relatedPosts.map(post => (
                <Link 
                  key={post.id} 
                  to={`/blogs/${post.slug}`}
                  className="group block"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-sm text-blue-600 font-medium">{post.category}</span>
                      <h4 className="text-lg font-semibold text-gray-900 mt-2 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                        {post.title}
                      </h4>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default DetailsBlog;