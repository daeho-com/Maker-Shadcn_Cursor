import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../common/components/ui/card';
import { Button } from '../../../common/components/ui/button';
import { Badge } from '../../../common/components/ui/badge';

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Products</h1>
        <p className="text-lg text-gray-600 mb-6">
          Discover amazing products built by the community
        </p>
        <div className="flex gap-4">
          <Button variant="default">Browse All</Button>
          <Button variant="outline">Submit Product</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sample Product Cards */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Product Name</CardTitle>
              <Badge variant="secondary">New</Badge>
            </div>
            <CardDescription>
              A brief description of this amazing product
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Category:</span>
                <Badge variant="outline">Technology</Badge>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Votes:</span>
                <span className="font-medium">1,234</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Another Product</CardTitle>
              <Badge variant="secondary">Trending</Badge>
            </div>
            <CardDescription>
              Another great product description
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Category:</span>
                <Badge variant="outline">Design</Badge>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Votes:</span>
                <span className="font-medium">2,567</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Third Product</CardTitle>
              <Badge variant="secondary">Popular</Badge>
            </div>
            <CardDescription>
              Yet another product with a compelling description
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Category:</span>
                <Badge variant="outline">Productivity</Badge>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Votes:</span>
                <span className="font-medium">3,891</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 