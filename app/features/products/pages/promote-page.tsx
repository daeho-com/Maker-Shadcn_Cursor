import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../common/components/ui/card';
import { Button } from '../../../common/components/ui/button';
import { Input } from '~/common/components/ui/input';
import { Badge } from '../../../common/components/ui/badge';
import { 
  TrendingUpIcon, 
  TargetIcon, 
  UsersIcon, 
  DollarSignIcon, 
  BarChart3Icon,
  StarIcon,
  EyeIcon,
  ShareIcon,
  ZapIcon,
  CheckCircleIcon
} from 'lucide-react';

export default function PromotePage() {
  const [selectedPlan, setSelectedPlan] = useState('basic');
  const [selectedProduct, setSelectedProduct] = useState('');

  const promotionPlans = [
    {
      id: 'basic',
      name: 'Basic Promotion',
      price: 49,
      duration: '7 days',
      features: [
        'Featured placement on homepage',
        'Social media promotion',
        'Email newsletter inclusion',
        'Analytics dashboard access'
      ],
      icon: StarIcon,
      color: 'bg-blue-500'
    },
    {
      id: 'premium',
      name: 'Premium Promotion',
      price: 99,
      duration: '14 days',
      features: [
        'All Basic features',
        'Top of category listings',
        'Priority customer support',
        'Detailed performance reports',
        'Custom promotion banner'
      ],
      icon: TrendingUpIcon,
      color: 'bg-purple-500',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise Promotion',
      price: 199,
      duration: '30 days',
      features: [
        'All Premium features',
        'Dedicated account manager',
        'Custom marketing campaign',
        'Press release distribution',
        'Influencer outreach',
        'A/B testing support'
      ],
      icon: TargetIcon,
      color: 'bg-green-500'
    }
  ];

  const userProducts = [
    { id: '1', name: 'Product Alpha', category: 'Development', votes: 1234 },
    { id: '2', name: 'Design Master Pro', category: 'Design', votes: 987 },
    { id: '3', name: 'Productivity Suite', category: 'Productivity', votes: 756 }
  ];

  const stats = [
    { label: 'Average Views', value: '15,420', icon: EyeIcon, color: 'text-blue-600' },
    { label: 'Click-through Rate', value: '8.5%', icon: BarChart3Icon, color: 'text-green-600' },
    { label: 'Conversion Rate', value: '3.2%', icon: TargetIcon, color: 'text-purple-600' },
    { label: 'Revenue Generated', value: '$12,450', icon: DollarSignIcon, color: 'text-orange-600' }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Promote Your Product</h1>
        <p className="text-lg text-gray-600 mb-6">
          Get more visibility and reach your target audience
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Promotion Plans */}
        <div className="lg:col-span-2">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Choose Your Promotion Plan</CardTitle>
              <CardDescription>
                Select the best plan to boost your product's visibility
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {promotionPlans.map((plan) => {
                  const IconComponent = plan.icon;
                  return (
                    <Card 
                      key={plan.id} 
                      className={`relative cursor-pointer transition-all hover:shadow-lg ${
                        selectedPlan === plan.id ? 'ring-2 ring-blue-500' : ''
                      }`}
                      onClick={() => setSelectedPlan(plan.id)}
                    >
                      {plan.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <Badge className="bg-purple-500 text-white">Most Popular</Badge>
                        </div>
                      )}
                      <CardHeader className="text-center pb-4">
                        <div className={`inline-flex p-3 rounded-full ${plan.color} text-white mb-4`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <CardTitle className="text-xl">{plan.name}</CardTitle>
                        <div className="flex items-baseline justify-center gap-1">
                          <span className="text-3xl font-bold">${plan.price}</span>
                          <span className="text-gray-500">/ {plan.duration}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {plan.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <CheckCircleIcon className="w-4 h-4 text-green-500" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button 
                          className={`w-full mt-6 ${
                            selectedPlan === plan.id ? 'bg-blue-600' : ''
                          }`}
                        >
                          {selectedPlan === plan.id ? 'Selected' : 'Choose Plan'}
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Product Selection */}
          <Card>
            <CardHeader>
              <CardTitle>Select Product to Promote</CardTitle>
              <CardDescription>
                Choose which product you want to promote
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {userProducts.map((product) => (
                  <Card 
                    key={product.id}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      selectedProduct === product.id ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                    }`}
                    onClick={() => setSelectedProduct(product.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900">{product.name}</h3>
                          <p className="text-sm text-gray-500">{product.category}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className="font-medium">{product.votes}</div>
                            <div className="text-xs text-gray-500">votes</div>
                          </div>
                          {selectedProduct === product.id && (
                            <CheckCircleIcon className="w-5 h-5 text-blue-500" />
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Promotion Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gray-100`}>
                        <IconComponent className={`w-4 h-4 ${stat.color}`} />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{stat.value}</div>
                        <div className="text-sm text-gray-500">{stat.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card>
            <CardHeader>
              <CardTitle>Why Promote?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <UsersIcon className="w-5 h-5 text-blue-500 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900">Reach More Users</h4>
                  <p className="text-sm text-gray-600">Get your product in front of thousands of potential users</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ZapIcon className="w-5 h-5 text-yellow-500 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900">Boost Engagement</h4>
                  <p className="text-sm text-gray-600">Increase votes, comments, and overall engagement</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShareIcon className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900">Viral Potential</h4>
                  <p className="text-sm text-gray-600">Featured products often go viral in our community</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Ready to Promote?</h3>
              <p className="text-blue-100 mb-4">
                Start your promotion campaign today and see the results
              </p>
              <Button variant="secondary" className="w-full">
                Start Promotion
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 