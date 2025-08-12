import React from 'react';
import { useParams, Link } from 'react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../common/components/ui/card';
import { Button } from '../../../common/components/ui/button';
import { Badge } from '../../../common/components/ui/badge';
import { ChevronLeftIcon, TrophyIcon, MedalIcon, AwardIcon, CalendarIcon, ClockIcon } from 'lucide-react';

export default function DailyLeaderboardPage() {
  const { year, month, day } = useParams();
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const monthName = monthNames[parseInt(month || '1') - 1];
  const dateString = `${monthName} ${day}, ${year}`;
  
  // Sample data for daily leaderboard
  const topProducts = [
    {
      id: 1,
      name: "Product Delta",
      description: "Revolutionary AI assistant",
      votes: 234,
      category: "AI",
      rank: 1,
      trend: "🚀 Viral",
      timePosted: "2 hours ago"
    },
    {
      id: 2,
      name: "Design Spark",
      description: "Instant design inspiration",
      votes: 189,
      category: "Design",
      rank: 2,
      trend: "⚡ Trending",
      timePosted: "4 hours ago"
    },
    {
      id: 3,
      name: "Code Lightning",
      description: "Lightning-fast code editor",
      votes: 156,
      category: "Development",
      rank: 3,
      trend: "🔥 Hot",
      timePosted: "6 hours ago"
    },
    {
      id: 4,
      name: "Data Stream",
      description: "Real-time data visualization",
      votes: 134,
      category: "Analytics",
      rank: 4,
      trend: "📊 Popular",
      timePosted: "8 hours ago"
    },
    {
      id: 5,
      name: "Team Sync",
      description: "Instant team collaboration",
      votes: 112,
      category: "Communication",
      rank: 5,
      trend: "💬 Active",
      timePosted: "10 hours ago"
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

  const getDayOfWeek = (year: string, month: string, day: string) => {
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    return date.toLocaleDateString('en-US', { weekday: 'long' });
  };

  const dayOfWeek = getDayOfWeek(year || '2024', month || '1', day || '1');

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
        <div className="flex items-center gap-3 mb-2">
          <CalendarIcon className="w-6 h-6 text-gray-500" />
          <h1 className="text-4xl font-bold text-gray-900">
            {dateString}
          </h1>
        </div>
        <p className="text-lg text-gray-600 mb-4">
          {dayOfWeek} • Today's most popular products
        </p>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <ClockIcon className="w-4 h-4" />
          <span>Updated every hour</span>
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
                    <Badge variant="secondary" className="text-purple-600 bg-purple-50">
                      {product.trend}
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-3">{product.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <span className="font-medium">{product.votes.toLocaleString()}</span>
                      <span>votes today</span>
                    </span>
                    <span>•</span>
                    <span>Rank #{product.rank}</span>
                    <span>•</span>
                    <span>{product.timePosted}</span>
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

      {/* Recent Days Navigation */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Days</h2>
        <div className="flex gap-2 flex-wrap">
          {Array.from({ length: 7 }, (_, i) => {
            const date = new Date();
            date.setDate(date.getDate() - i);
            const y = date.getFullYear();
            const m = date.getMonth() + 1;
            const d = date.getDate();
            const isToday = i === 0;
            
            return (
              <Button
                key={i}
                variant={isToday ? "default" : "outline"}
                asChild
              >
                <Link to={`/products/leaderboards/daily/${y}/${m}/${d}`}>
                  {isToday ? 'Today' : date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </Link>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
} 