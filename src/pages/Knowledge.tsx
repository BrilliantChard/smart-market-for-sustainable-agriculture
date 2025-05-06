
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ArticleCard from '@/components/knowledge/ArticleCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

// Mock data for articles
const articles = [
  {
    id: 1,
    title: 'Sustainable Pest Management Techniques for Organic Farming',
    excerpt: 'Learn effective and eco-friendly approaches to manage pests without compromising organic certification standards.',
    author: {
      id: 101,
      name: 'Dr. Emily Chen',
      avatar: '/placeholder.svg',
      specialization: 'Organic Farming Specialist'
    },
    publishDate: '2025-04-28',
    readTime: 8,
    categories: ['Organic', 'Pest Control'],
    image: '/placeholder.svg',
    featured: true
  },
  {
    id: 2,
    title: 'Understanding Soil Health: A Guide to Nutrient Management',
    excerpt: 'Discover how to analyze your soil quality and implement effective nutrient management strategies for optimal crop yield.',
    author: {
      id: 102,
      name: 'Prof. Michael Rodriguez',
      avatar: '/placeholder.svg',
      specialization: 'Soil Scientist'
    },
    publishDate: '2025-04-22',
    readTime: 12,
    categories: ['Soil Health', 'Crop Management'],
    image: '/placeholder.svg',
    featured: false
  },
  {
    id: 3,
    title: 'Water Conservation Strategies for Small-Scale Farmers',
    excerpt: 'Practical methods to conserve water in agricultural practices while maintaining crop health and productivity.',
    author: {
      id: 103,
      name: 'Sarah Johnson',
      avatar: '/placeholder.svg',
      specialization: 'Water Management Expert'
    },
    publishDate: '2025-04-18',
    readTime: 6,
    categories: ['Water Conservation', 'Sustainability'],
    image: '/placeholder.svg',
    featured: false
  },
  {
    id: 4,
    title: 'Climate-Resilient Farming: Adapting to Changing Weather Patterns',
    excerpt: 'How farmers can prepare for and respond to increasingly unpredictable climate conditions and extreme weather events.',
    author: {
      id: 104,
      name: 'Dr. Ahmed Hassan',
      avatar: '/placeholder.svg',
      specialization: 'Climate Adaptation Expert'
    },
    publishDate: '2025-04-15',
    readTime: 10,
    categories: ['Climate Change', 'Resilience'],
    image: '/placeholder.svg',
    featured: true
  },
  {
    id: 5,
    title: 'The Benefits of Crop Rotation for Soil Health and Pest Management',
    excerpt: 'Exploring traditional and modern approaches to crop rotation and their impact on long-term farm sustainability.',
    author: {
      id: 105,
      name: 'Maria Garcia',
      avatar: '/placeholder.svg',
      specialization: 'Sustainable Farming Consultant'
    },
    publishDate: '2025-04-10',
    readTime: 7,
    categories: ['Crop Management', 'Sustainability'],
    image: '/placeholder.svg',
    featured: false
  },
  {
    id: 6,
    title: 'Modern Irrigation Systems: Balancing Efficiency and Cost',
    excerpt: 'An overview of irrigation technologies suitable for farms of different sizes and budget considerations.',
    author: {
      id: 106,
      name: 'John Williams',
      avatar: '/placeholder.svg',
      specialization: 'Agricultural Engineer'
    },
    publishDate: '2025-04-05',
    readTime: 9,
    categories: ['Irrigation', 'Technology'],
    image: '/placeholder.svg',
    featured: false
  }
];

const featuredArticles = articles.filter(article => article.featured);
const latestArticles = [...articles].sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
const popularCategories = ['Crop Management', 'Pest Control', 'Sustainability', 'Water Conservation', 'Organic', 'Technology'];

const Knowledge = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Knowledge Hub</h1>
              <p className="text-gray-600">
                Expert articles, guides, and insights to improve your agricultural practices.
              </p>
            </div>
            
            <div className="mt-4 md:mt-0 w-full md:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search articles, topics, or experts..."
                  className="w-full md:w-64 pl-9"
                />
              </div>
            </div>
          </div>
          
          {/* Featured Articles */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredArticles.map(article => (
                <ArticleCard 
                  key={article.id}
                  id={article.id}
                  title={article.title}
                  excerpt={article.excerpt}
                  author={article.author}
                  publishDate={article.publishDate}
                  readTime={article.readTime}
                  categories={article.categories}
                  image={article.image}
                  featured={article.featured}
                />
              ))}
            </div>
          </section>
          
          {/* Main Content */}
          <Tabs defaultValue="latest" className="mb-12">
            <TabsList>
              <TabsTrigger value="latest">Latest Articles</TabsTrigger>
              <TabsTrigger value="popular">Popular Articles</TabsTrigger>
              <TabsTrigger value="videos">Video Tutorials</TabsTrigger>
              <TabsTrigger value="qa">Q&A Forum</TabsTrigger>
            </TabsList>
            
            <TabsContent value="latest">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {latestArticles.map(article => (
                  <ArticleCard 
                    key={article.id}
                    id={article.id}
                    title={article.title}
                    excerpt={article.excerpt}
                    author={article.author}
                    publishDate={article.publishDate}
                    readTime={article.readTime}
                    categories={article.categories}
                    image={article.image}
                    featured={false}
                  />
                ))}
              </div>
              <div className="text-center mt-8">
                <Button variant="outline">Load More Articles</Button>
              </div>
            </TabsContent>
            
            <TabsContent value="popular">
              <div className="py-10 text-center">
                <p className="text-gray-600">Popular articles will be displayed here.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="videos">
              <div className="py-10 text-center">
                <p className="text-gray-600">Video tutorials will be displayed here.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="qa">
              <div className="py-10 text-center">
                <p className="text-gray-600">Q&A forum will be displayed here.</p>
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Categories and Expert Directory */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Categories */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold mb-4">Popular Categories</h3>
              <div className="grid grid-cols-2 gap-3">
                {popularCategories.map((category, index) => (
                  <Button 
                    key={index} 
                    variant="outline" 
                    className="justify-start text-left"
                  >
                    {category}
                  </Button>
                ))}
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Subscribe to Updates</h3>
                <p className="text-gray-600 mb-3">
                  Get the latest articles and farming tips delivered to your inbox.
                </p>
                <div className="flex space-x-2">
                  <Input placeholder="Your email address" />
                  <Button>Subscribe</Button>
                </div>
              </div>
            </div>
            
            {/* Expert Directory */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold mb-4">Meet Our Experts</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Expert Card 1 */}
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Dr. Emily Chen</h4>
                    <p className="text-sm text-gray-500">Organic Farming Specialist</p>
                    <Button variant="link" className="p-0 mt-1 h-auto">View Profile</Button>
                  </div>
                </div>
                
                {/* Expert Card 2 */}
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Prof. Michael Rodriguez</h4>
                    <p className="text-sm text-gray-500">Soil Scientist</p>
                    <Button variant="link" className="p-0 mt-1 h-auto">View Profile</Button>
                  </div>
                </div>
                
                {/* Expert Card 3 */}
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-sm text-gray-500">Water Management Expert</p>
                    <Button variant="link" className="p-0 mt-1 h-auto">View Profile</Button>
                  </div>
                </div>
                
                {/* Expert Card 4 */}
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Dr. Ahmed Hassan</h4>
                    <p className="text-sm text-gray-500">Climate Adaptation Expert</p>
                    <Button variant="link" className="p-0 mt-1 h-auto">View Profile</Button>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <Button variant="outline">View All Experts</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Knowledge;
