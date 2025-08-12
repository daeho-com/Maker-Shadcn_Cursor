import React from 'react';
import { useParams, Link } from 'react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../common/components/ui/card';
import { Button } from '../../../common/components/ui/button';
import { Badge } from '../../../common/components/ui/badge';
import { ChevronLeftIcon, TrophyIcon, MedalIcon, AwardIcon } from 'lucide-react';

export default function YearlyLeaderboardPage() {
  const { year } = useParams();
  
  // Sample data for yearly leaderboard
  const topProducts = [
    {
      id: 1,
      name: "Product Alpha",
      description: "Revolutionary productivity tool",
      votes: 15420,
      category: "Productivity",
      rank: 1
    },
    {
      id: 2,
      name: "Design Master",
      description: "Advanced design collaboration platform",
      votes: 12890,
      category: "Design",
      rank: 2
    },
    {
      id: 3,
      name: "Code Flow",
      description: "Next-generation code editor",
      votes: 11230,
      category: "Development",
      rank: 3
    },
    {
      id: 4,
      name: "Data Insights",
      description: "AI-powered analytics dashboard",
      votes: 9870,
      category: "Analytics",
      rank: 4
    },
    {
      id: 5,
      name: "Team Sync",
      description: "Real-time team collaboration tool",
      votes: 8760,
      category: "Communication",
      rank: 5
    }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <TrophyIcon className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <MedalIcon className="w-6 h-6 text-gray-400" />;
      case 3:
        return <AwardIcon className="w-6 h-6 text-amber-600" />;
      default:
        return <span className="w-6 h-6 text-center font-bold text-gray-500">{rank}</span>;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <Button variant="outline" asChild>
            <Link to="/products/leaderboards">
              <ChevronLeftIcon className="w-4 h-4 mr-2" />
              Back to Leaderboards
            </Link>
          </Button>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Top Products of {year}
        </h1>
        <p className="text-lg text-gray-600">
          The most popular products that dominated {year}
        </p>
      </div>

      <div className="space-y-4">
        {topProducts.map((product) => (
          <Card key={product.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full">
                  {getRankIcon(product.rank)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                    <Badge variant="outline">{product.category}</Badge>
                  </div>
                  <p className="text-gray-600 mb-3">{product.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <span className="font-medium">{product.votes.toLocaleString()}</span>
                      <span>votes</span>
                    </span>
                    <span>•</span>
                    <span>Rank #{product.rank}</span>
                  </div>
                </div>
                <Button variant="outline" asChild>
                  <Link to={`/products/${product.id}`}>
                    View Product
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Year Navigation */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse Other Years</h2>
        <div className="flex gap-2 flex-wrap">
          {[2020, 2021, 2022, 2023, 2024].map((y) => (
            <Button
              key={y}
              variant={y.toString() === year ? "default" : "outline"}
              asChild
            >
              <Link to={`/products/leaderboards/yearly/${y}`}>
                {y}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
} 