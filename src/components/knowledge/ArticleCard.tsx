
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { BookOpen } from 'lucide-react';

interface ArticleCardProps {
  id: number;
  title: string;
  excerpt: string;
  author: {
    id: number;
    name: string;
    avatar: string;
    specialization: string;
  };
  publishDate: string;
  readTime: number;
  categories: string[];
  image?: string;
  featured?: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  id,
  title,
  excerpt,
  author,
  publishDate,
  readTime,
  categories,
  image,
  featured = false
}) => {
  const formattedDate = new Date(publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  
  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${featured ? 'border-primary border-2' : ''}`}>
      <a href={`/knowledge/article/${id}`}>
        {image && (
          <div className="h-48 overflow-hidden">
            <img 
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform hover:scale-105 duration-200"
            />
          </div>
        )}
        <CardContent className="p-5">
          <div className="flex flex-wrap gap-2 mb-3">
            {categories.map((category, idx) => (
              <Badge key={idx} variant="secondary" className="font-normal text-xs">
                {category}
              </Badge>
            ))}
            
            {featured && (
              <Badge variant="default" className="bg-primary font-normal text-xs">
                Featured
              </Badge>
            )}
          </div>
          
          <h3 className="text-xl font-bold mb-2 line-clamp-2 hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="text-gray-600 line-clamp-3 mb-4">
            {excerpt}
          </p>
          
          <div className="flex justify-between items-center mt-auto">
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={author.avatar} alt={author.name} />
                <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{author.name}</p>
                <p className="text-xs text-gray-500">{author.specialization}</p>
              </div>
            </div>
            
            <div className="flex items-center text-sm text-gray-500">
              <span className="mr-3">{formattedDate}</span>
              <BookOpen className="w-4 h-4 mr-1" />
              <span>{readTime} min read</span>
            </div>
          </div>
        </CardContent>
      </a>
    </Card>
  );
};

export default ArticleCard;
