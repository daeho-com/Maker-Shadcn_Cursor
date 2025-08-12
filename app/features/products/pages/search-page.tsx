import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../common/components/ui/card';
import { Button } from '../../../common/components/ui/button';
import { Badge } from '../../../common/components/ui/badge';
import { Input } from '~/common/components/ui/input';
import { SearchIcon, FilterIcon, XIcon, StarIcon, ClockIcon, TrendingUpIcon } from 'lucide-react';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('relevance');

  // Sample search results
  const searchResults = [
    {
      id: 1,
      name: "Product Alpha",
      description: "A revolutionary tool that helps developers build better applications",
      category: "Development",
      votes: 1234,
      comments: 89,
      views: 5678,
      tags: ["New", "Trending"],
      timeAgo: "2 days ago",
      relevance: 95
    },
    {
      id: 2,
      name: "Design Master Pro",
      description: "Professional design tool for creative professionals",
      category: "Design",
      votes: 987,
      comments: 45,
      views: 3456,
      tags: ["Popular"],
      timeAgo: "1 week ago",
      relevance: 87
    },
    {
      id: 3,
      name: "Productivity Suite",
      description: "Complete productivity solution for teams",
      category: "Productivity",
      votes: 756,
      comments: 32,
      views: 2345,
      tags: ["Featured"],
      timeAgo: "3 days ago",
      relevance: 82
    },
    {
      id: 4,
      name: "Analytics Dashboard",
      description: "Advanced analytics and reporting platform",
      category: "Analytics",
      votes: 654,
      comments: 28,
      views: 1987,
      tags: ["Hot"],
      timeAgo: "5 days ago",
      relevance: 78
    },
    {
      id: 5,
      name: "Team Collaboration Tool",
      description: "Seamless team communication and project management",
      category: "Communication",
      votes: 543,
      comments: 21,
      views: 1654,
      tags: ["Recommended"],
      timeAgo: "1 week ago",
      relevance: 75
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'development', name: 'Development' },
    { id: 'design', name: 'Design' },
    { id: 'productivity', name: 'Productivity' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'communication', name: 'Communication' }
  ];

  const sortOptions = [
    { id: 'relevance', name: 'Relevance', icon: StarIcon },
    { id: 'newest', name: 'Newest', icon: ClockIcon },
    { id: 'popular', name: 'Most Popular', icon: TrendingUpIcon },
    { id: 'votes', name: 'Most Voted', icon: StarIcon }
  ];

  const filteredResults = searchResults.filter(product => {
    const matchesQuery = searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || 
      product.category.toLowerCase() === selectedCategory;
    
    return matchesQuery && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Search Products</h1>
        <p className="text-lg text-gray-600 mb-6">
          Find the perfect product for your needs
        </p>

        {/* Search Bar */}
        <div className="relative mb-6">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-3 text-lg"
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
              onClick={() => setSearchQuery('')}
            >
              <XIcon className="w-4 h-4" />
            </Button>
          )}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-2">
            <FilterIcon className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Category:</span>
            <div className="flex gap-2">
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={selectedCategory === cat.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.name}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700">Sort by:</span>
            <div className="flex gap-2">
              {sortOptions.map((option) => {
                const IconComponent = option.icon;
                return (
                  <Button
                    key={option.id}
                    variant={sortBy === option.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSortBy(option.id)}
                  >
                    <IconComponent className="w-4 h-4 mr-1" />
                    {option.name}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm text-gray-500">
            {filteredResults.length} results found
          </span>
          {searchQuery && (
            <span className="text-sm text-gray-500">
              Search results for "{searchQuery}"
            </span>
          )}
        </div>
      </div>

      {/* Search Results */}
      <div className="space-y-4">
        {filteredResults.length > 0 ? (
          filteredResults.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                      <Badge variant="outline">{product.category}</Badge>
                      <div className="flex gap-1">
                        {product.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-3">{product.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <span className="font-medium">{product.votes}</span>
                        <span>votes</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <span className="font-medium">{product.comments}</span>
                        <span>comments</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <span className="font-medium">{product.views}</span>
                        <span>views</span>
                      </span>
                      <span>•</span>
                      <span>{product.timeAgo}</span>
                      <span>•</span>
                      <span className="text-green-600 font-medium">
                        {product.relevance}% relevant
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" asChild>
                    <a href={`/products/${product.id}`}>
                      View Product
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card>
            <CardContent className="p-12 text-center">
              <SearchIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search terms or filters
              </p>
              <Button onClick={() => setSearchQuery('')}>
                Clear Search
              </Button>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Load More */}
      {filteredResults.length > 0 && (
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            Load More Results
          </Button>
        </div>
      )}
    </div>
  );
} 