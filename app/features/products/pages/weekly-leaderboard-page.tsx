import React from 'react';
import { useParams, Link } from 'react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../common/components/ui/card';
import { Button } from '../../../common/components/ui/button';
import { Badge } from '../../../common/components/ui/badge';
import { ChevronLeftIcon, TrophyIcon, MedalIcon, AwardIcon, TrendingUpIcon } from 'lucide-react';

export default function WeeklyLeaderboardPage() {
  const { year, week } = useParams();
  
  // Sample data for weekly leaderboard
  const topProducts = [
    {
      id: 1,
      name: "Product Gamma",
      description: "AI-powered workflow automation",
      votes: 890,
      category: "Productivity",
      rank: 1,
      trend: "🔥 Hot",
      growth: "+45%"
    },
    {
      id: 2,
      name: "Design Flow",
      description: "Streamlined design collaboration",
      votes: 670,
      category: "Design",
      rank: 2,
      trend: "📈 Rising",
      growth: "+32%"
    },
    {
      id: 3,
      name: "Dev Hub",
      description: "All-in-one development platform",
      votes: 540,
      category: "Development",
      rank: 3,
      trend: "⭐ New",
      growth: "+28%"
    },
    {
      id: 4,
      name: "Data Flow",
      description: "Real-time data processing",
      votes: 420,
      category: "Analytics",
      rank: 4,
      trend: "📊 Trending",
      growth: "+18%"
    },
    {
      id: 5,
      name: "Team Pulse",
      description: "Team performance analytics",
      votes: 380,
      category: "Communication",
      rank: 5,
      trend: "🚀 Growing",
      growth: "+15%"
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

  const getWeekRange = (year: string, week: string) => {
    // Simple week calculation (this is a simplified version)
    const startDate = new Date(parseInt(year), 0, 1 + (parseInt(week) - 1) * 7);
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 6);
    
    return {
      start: startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      end: endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };
  };

  const weekRange = getWeekRange(year || '2024', week || '1');

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
          Week {week} Leaderboard - {year}
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          {weekRange.start} - {weekRange.end}
        </p>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <TrendingUpIcon className="w-4 h-4" />
          <span>Weekly trending products</span>
        </div>
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
                    <Badge variant="secondary" className="text-orange-600 bg-orange-50">
                      {product.trend}
                    </Badge>
                    <Badge variant="secondary" className="text-green-600 bg-green-50">
                      {product.growth}
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-3">{product.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <span className="font-medium">{product.votes.toLocaleString()}</span>
                      <span>votes this week</span>
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

      {/* Week Navigation */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse Other Weeks</h2>
        <div className="flex gap-2 flex-wrap">
          {Array.from({ length: 12 }, (_, i) => i + 1).map((w) => (
            <Button
              key={w}
              variant={w.toString() === week ? "default" : "outline"}
              asChild
            >
              <Link to={`/products/leaderboards/weekly/${year}/${w}`}>
                Week {w}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
} 