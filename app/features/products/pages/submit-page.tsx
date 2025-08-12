import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../common/components/ui/card';
import { Button } from '../../../common/components/ui/button';
import { Input } from '~/common/components/ui/input';
import { Badge } from '../../../common/components/ui/badge';
import { UploadIcon, LinkIcon, TagIcon, GlobeIcon, AlertCircleIcon, CheckCircleIcon } from 'lucide-react';

export default function SubmitPage() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    website: '',
    category: '',
    tags: '',
    imageUrl: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const categories = [
    'Development',
    'Design',
    'Productivity',
    'Analytics',
    'Communication',
    'Marketing',
    'Security',
    'Mobile',
    'Photography',
    'Music',
    'Education',
    'Gaming'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          description: '',
          website: '',
          category: '',
          tags: '',
          imageUrl: ''
        });
        setSubmitStatus('idle');
      }, 3000);
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Submit Your Product</h1>
        <p className="text-lg text-gray-600 mb-6">
          Share your amazing product with the community
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Product Information</CardTitle>
              <CardDescription>
                Fill in the details about your product
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Product Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Product Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your product name"
                    value={formData.name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('name', e.target.value)}
                    required
                    className="w-full"
                  />
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Description *
                  </label>
                  <textarea
                    id="description"
                    placeholder="Describe what your product does and why it's amazing"
                    value={formData.description}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange('description', e.target.value)}
                    required
                    rows={4}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>

                {/* Website */}
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                    Website URL *
                  </label>
                  <div className="relative">
                    <GlobeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="website"
                      type="url"
                      placeholder="https://yourproduct.com"
                      value={formData.website}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('website', e.target.value)}
                      required
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    id="category"
                    value={formData.category}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleInputChange('category', e.target.value)}
                    required
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Tags */}
                <div>
                  <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
                    Tags
                  </label>
                  <div className="relative">
                    <TagIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="tags"
                      type="text"
                      placeholder="productivity, ai, collaboration (comma separated)"
                      value={formData.tags}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('tags', e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Image URL */}
                <div>
                  <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-2">
                    Product Image URL
                  </label>
                  <div className="relative">
                    <UploadIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="imageUrl"
                      type="url"
                      placeholder="https://example.com/product-image.png"
                      value={formData.imageUrl}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('imageUrl', e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Product'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Guidelines */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Submission Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900">Original Product</h4>
                  <p className="text-sm text-gray-600">Submit your own product or get permission from the creator</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900">Clear Description</h4>
                  <p className="text-sm text-gray-600">Explain what your product does and its key features</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900">Working Link</h4>
                  <p className="text-sm text-gray-600">Ensure your website is accessible and functional</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Status */}
          {submitStatus === 'success' && (
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-green-600" />
                  <div>
                    <h4 className="font-medium text-green-900">Submission Successful!</h4>
                    <p className="text-sm text-green-700">Your product has been submitted for review</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {submitStatus === 'error' && (
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <AlertCircleIcon className="w-6 h-6 text-red-600" />
                  <div>
                    <h4 className="font-medium text-red-900">Submission Failed</h4>
                    <p className="text-sm text-red-700">Please try again or contact support</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Popular Tags */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Popular Tags</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {['AI', 'Productivity', 'Design', 'Development', 'Analytics', 'Collaboration', 'Mobile', 'Web App', 'API', 'Open Source'].map((tag) => (
                  <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-gray-100">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 