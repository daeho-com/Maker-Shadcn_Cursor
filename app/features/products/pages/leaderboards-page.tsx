import React from 'react';
import { Link } from 'react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../common/components/ui/card';
import { Button } from '../../../common/components/ui/button';
import { Badge } from '../../../common/components/ui/badge';

export default function LeaderboardsPage() {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const currentDay = new Date().getDate();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Leaderboards</h1>
        <p className="text-lg text-gray-600 mb-6">
          Discover the most popular products across different time periods
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Yearly Leaderboard */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl">Yearly</CardTitle>
            <CardDescription>
              Top products of {currentYear}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link to={`/products/leaderboards/yearly/${currentYear}`}>
                View Yearly Rankings
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Monthly Leaderboard */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl">Monthly</CardTitle>
            <CardDescription>
              Top products of this month
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link to={`/products/leaderboards/monthly/${currentYear}/${currentMonth}`}>
                View Monthly Rankings
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Weekly Leaderboard */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl">Weekly</CardTitle>
            <CardDescription>
              Top products of this week
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link to={`/products/leaderboards/weekly/${currentYear}/1`}>
                View Weekly Rankings
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Daily Leaderboard */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl">Daily</CardTitle>
            <CardDescription>
              Top products of today
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link to={`/products/leaderboards/daily/${currentYear}/${currentMonth}/${currentDay}`}>
                View Daily Rankings
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Stats</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">1,234</div>
                <div className="text-sm text-gray-500">Total Products</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">56</div>
                <div className="text-sm text-gray-500">Categories</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">89K</div>
                <div className="text-sm text-gray-500">Total Votes</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 