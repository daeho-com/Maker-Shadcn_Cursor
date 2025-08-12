import React from 'react';
import { Link } from 'react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../common/components/ui/card';
import { Button } from '../../../common/components/ui/button';
import { Badge } from '../../../common/components/ui/badge';
import { 
  CodeIcon, 
  PaletteIcon, 
  BarChart3Icon, 
  MessageSquareIcon, 
  ZapIcon, 
  ShieldIcon,
  GlobeIcon,
  SmartphoneIcon,
  CameraIcon,
  MusicIcon,
  BookOpenIcon,
  GamepadIcon
} from 'lucide-react';

export default function CategoriesPage() {
  const categories = [
    {
      id: 'development',
      name: 'Development',
      description: 'Tools and platforms for developers',
      icon: CodeIcon,
      productCount: 234,
      color: 'bg-blue-500'
    },
    {
      id: 'design',
      name: 'Design',
      description: 'Design tools and creative software',
      icon: PaletteIcon,
      productCount: 189,
      color: 'bg-purple-500'
    },
    {
      id: 'productivity',
      name: 'Productivity',
      description: 'Tools to boost your efficiency',
      icon: ZapIcon,
      productCount: 156,
      color: 'bg-green-500'
    },
    {
      id: 'analytics',
      name: 'Analytics',
      description: 'Data analysis and insights',
      icon: BarChart3Icon,
      productCount: 98,
      color: 'bg-orange-500'
    },
    {
      id: 'communication',
      name: 'Communication',
      description: 'Team collaboration and messaging',
      icon: MessageSquareIcon,
      productCount: 87,
      color: 'bg-pink-500'
    },
    {
      id: 'security',
      name: 'Security',
      description: 'Cybersecurity and privacy tools',
      icon: ShieldIcon,
      productCount: 76,
      color: 'bg-red-500'
    },
    {
      id: 'marketing',
      name: 'Marketing',
      description: 'Digital marketing and growth tools',
      icon: GlobeIcon,
      productCount: 65,
      color: 'bg-indigo-500'
    },
    {
      id: 'mobile',
      name: 'Mobile',
      description: 'Mobile apps and development',
      icon: SmartphoneIcon,
      productCount: 54,
      color: 'bg-teal-500'
    },
    {
      id: 'photography',
      name: 'Photography',
      description: 'Photo editing and management',
      icon: CameraIcon,
      productCount: 43,
      color: 'bg-yellow-500'
    },
    {
      id: 'music',
      name: 'Music',
      description: 'Audio creation and editing',
      icon: MusicIcon,
      productCount: 32,
      color: 'bg-emerald-500'
    },
    {
      id: 'education',
      name: 'Education',
      description: 'Learning platforms and tools',
      icon: BookOpenIcon,
      productCount: 28,
      color: 'bg-cyan-500'
    },
    {
      id: 'gaming',
      name: 'Gaming',
      description: 'Game development and tools',
      icon: GamepadIcon,
      productCount: 21,
      color: 'bg-violet-500'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Categories</h1>
        <p className="text-lg text-gray-600 mb-6">
          Explore products by category and find exactly what you need
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <Card key={category.id} className="hover:shadow-lg transition-shadow group">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${category.color} text-white`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {category.description}
                </CardDescription>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">
                    {category.productCount} products
                  </Badge>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/products/categories/${category.id}`}>
                      Browse
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Featured Categories */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.slice(0, 3).map((category) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.id} className="bg-gradient-to-br from-gray-50 to-white border-2 hover:border-blue-200 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl ${category.color} text-white`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
                      <p className="text-sm text-gray-500">{category.productCount} products</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Button className="w-full" asChild>
                    <Link to={`/products/categories/${category.id}`}>
                      Explore {category.name}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
} 