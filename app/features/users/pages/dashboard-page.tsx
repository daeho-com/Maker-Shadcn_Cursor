import type {Route} from "./+types/dashboard-page"
import { Card, CardContent, CardHeader, CardTitle } from "~/common/components/ui/card"
import { ChartTooltip, ChartTooltipContent, ChartContainer, } from "~/common/components/ui/chart"
import { AreaChart, Area, CartesianGrid, XAxis, LineChart, Line } from "recharts"
import type {ChartConfig} from "~/common/components/ui/chart"

export const meta: Route.MetaFunction = () => {
  return [
    {title: "Dashboard"},
    {name: "description", content: "Dashboard"},
  ]
}

const chartData = [
  { month: "January", views: 186 },
  { month: "February", views: 305 },
  { month: "March", views: 237 },
  { month: "April", views: 73 },
  { month: "May", views: 209 },
  { month: "June", views: 214 },
]
const chartConfig = {
  views: {
    label: "view",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig


export default function DashboardPage() {
  return (
    <div className = "space-y-5">
      <h1 className = "text-2xl font-semibold mb-6">Dashboard Home</h1>
      <Card className = "w-1/2">
        <CardHeader>
          <CardTitle>
            <h2>
              Profile views
            </h2>
          </CardTitle> 
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Line
                dataKey="views"
                type="natural"
                strokeWidth={2}
                stroke="var(--color-views)"
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
} 