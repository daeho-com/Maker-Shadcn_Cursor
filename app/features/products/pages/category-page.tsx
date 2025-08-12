import React from 'react';
import { useParams, Link } from 'react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../common/components/ui/card';
import { Button } from '../../../common/components/ui/button';
import { Badge } from '../../../common/components/ui/badge';
import { ChevronLeftIcon, FilterIcon, SortAscIcon, GridIcon, ListIcon } from 'lucide-react';

export default function CategoryPage() {
  const { category } = useParams();
  
  // Sample category data
  const categoryData = {
    development: {
      name: 'Development',
      description: 'Tools and platforms for developers',
      color: 'bg-blue-500',
      productCount: 234
    },
    design: {
      name: 'Design',
      description: 'Design tools and creative software',
      color: 'bg-purple-500',
      productCount: 189
    },
    productivity: {
      name: 'Productivity',
      description: 'Tools to boost your efficiency',
      color: 'bg-green-500',
      productCount: 156
    }
  };

  const currentCategory = categoryData[category as keyof typeof categoryData] || {
    name: category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Unknown',
    description: 'Amazing products in this category',
    color: 'bg-gray-500',
    productCount: 0
  };

  // Sample products for the category
  const products = [
    {
      id: 1,
      name: "Product Alpha",
      description: "A revolutionary tool that changes everything",
      votes: 1234,
      comments: 89,
      views: 5678,
      tags: ["New", "Trending"],
      timeAgo: "2 days ago"
    },
    {
      id: 2,
      name: "Product Beta",
      description: "Another amazing product in this category",
      votes: 987,
      comments: 45,
      views: 3456,
      tags: ["Popular"],
      timeAgo: "1 week ago"
    },
    {
      id: 3,
      name: "Product Gamma",
      description: "Innovative solution for modern problems",
      votes: 756,
      comments: 32,
      views: 2345,
      tags: ["Featured"],
      timeAgo: "3 days ago"
    },
    {
      id: 4,
      name: "Product Delta",
      description: "Cutting-edge technology for professionals",
      votes: 654,
      comments: 28,
      views: 1987,
      tags: ["Hot"],
      timeAgo: "5 days ago"
    },
    {
      id: 5,
      name: "Product Epsilon",
      description: "Essential tool for daily workflow",
      votes: 543,
      comments: 21,
      views: 1654,
      tags: ["Recommended"],
      timeAgo: "1 week ago"
    },
    {
      id: 6,
      name: "Product Zeta",
      description: "Advanced features for power users",
      votes: 432,
      comments: 18,
      views: 1432,
      tags: ["Premium"],
      timeAgo: "2 weeks ago"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <Button variant="outline" asChild>
            <Link to="/products/categories">
              <ChevronLeftIcon className="w-4 h-4 mr-2" />
              Back to Categories
            </Link>
          </Button>
        </div>
        
        <div className="flex items-center gap-4 mb-6">
          <div className={`p-3 rounded-lg ${currentCategory.color} text-white`}>
            <span className="text-2xl font-bold">{currentCategory.name.charAt(0)}</span>
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900">{currentCategory.name}</h1>
            <p className="text-lg text-gray-600">{currentCategory.description}</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Badge variant="secondary">
              {currentCategory.productCount} products
            </Badge>
            <span className="text-sm text-gray-500">
              Showing {products.length} of {currentCategory.productCount}
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <FilterIcon className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <SortAscIcon className="w-4 h-4 mr-2" />
              Sort
            </Button>
            <Button variant="outline" size="sm">
              <GridIcon className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <div className="flex gap-1">
                  {product.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <CardDescription>
                {product.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <span className="font-medium">{product.votes}</span>
                    <span>votes</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="font-medium">{product.comments}</span>
                    <span>comments</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="font-medium">{product.views}</span>
                    <span>views</span>
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{product.timeAgo}</span>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/products/${product.id}`}>
                      View Details
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="mt-12 text-center">
        <Button variant="outline" size="lg">
          Load More Products
        </Button>
      </div>

      {/* Related Categories */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Categories</h2>
        <div className="flex gap-2 flex-wrap">
          {Object.entries(categoryData).map(([key, data]) => (
            <Button
              key={key}
              variant={key === category ? "default" : "outline"}
              asChild
            >
              <Link to={`/products/categories/${key}`}>
                {data.name}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
} 