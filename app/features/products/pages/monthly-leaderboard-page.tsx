import React from 'react';
import { useParams, Link } from 'react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../common/components/ui/card';
import { Button } from '../../../common/components/ui/button';
import { Badge } from '../../../common/components/ui/badge';
import { ChevronLeftIcon, TrophyIcon, MedalIcon, AwardIcon } from 'lucide-react';

export default function MonthlyLeaderboardPage() {
  const { year, month } = useParams();
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const monthName = monthNames[parseInt(month || '1') - 1];
  
  // Sample data for monthly leaderboard
  const topProducts = [
    {
      id: 1,
      name: "Product Beta",
      description: "Innovative collaboration tool",
      votes: 2340,
      category: "Productivity",
      rank: 1,
      trend: "+15%"
    },
    {
      id: 2,
      name: "Design Pro",
      description: "Professional design suite",
      votes: 1890,
      category: "Design",
      rank: 2,
      trend: "+8%"
    },
    {
      id: 3,
      name: "Code Studio",
      description: "Advanced development environment",
      votes: 1670,
      category: "Development",
      rank: 3,
      trend: "+12%"
    },
    {
      id: 4,
      name: "Analytics Hub",
      description: "Comprehensive data analysis platform",
      votes: 1450,
      category: "Analytics",
      rank: 4,
      trend: "+5%"
    },
    {
      id: 5,
      name: "Team Connect",
      description: "Seamless team communication",
      votes: 1230,
      category: "Communication",
      rank: 5,
      trend: "+20%"
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
          Top Products of {monthName} {year}
        </h1>
        <p className="text-lg text-gray-600">
          The most popular products this month
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
                    <Badge variant="secondary" className="text-green-600 bg-green-50">
                      {product.trend}
                    </Badge>
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

      {/* Month Navigation */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse Other Months</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {monthNames.map((name, index) => (
            <Button
              key={name}
              variant={(index + 1).toString() === month ? "default" : "outline"}
              asChild
              className="text-sm"
            >
              <Link to={`/products/leaderboards/monthly/${year}/${index + 1}`}>
                {name}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
} 