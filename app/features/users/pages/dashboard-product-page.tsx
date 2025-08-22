import type {Route} from "./+types/dashboard-product-page"
import { Card, CardContent, CardHeader, CardTitle } from "~/common/components/ui/card"
import { ChartTooltip, ChartTooltipContent, ChartContainer, } from "~/common/components/ui/chart"
import { AreaChart, Area, CartesianGrid, XAxis } from "recharts"
import type {ChartConfig} from "~/common/components/ui/chart"

export const meta: Route.MetaFunction = () => {
  return [
    {title: "Dashboard Product"},
    {name: "description", content: "Dashboard Product"},
  ]
}

const chartData = [
  { month: "January", views: 186, visitors: 100 },
  { month: "February", views: 305, visitors: 120 },
  { month: "March", views: 237, visitors: 150 },
  { month: "April", views: 73, visitors: 100 },
  { month: "May", views: 209, visitors: 120 },
  { month: "June", views: 214, visitors: 150 },
]
const chartConfig = {
  views: {
    label: "Page Views",
    color: "var(--chart-1)",
  },
  visitors: {
    label: "Visitors",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig

export default function DashboardProductPage() {
  return (
    <div className = "space-y-5">
      <h1 className = "text-2xl font-semibold mb-6">Analytics</h1>
      <Card className = "w-1/2">
        <CardHeader>
          <CardTitle>
            <h2>
              Performance
            </h2>
          </CardTitle> 
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <AreaChart
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
                wrapperStyle={{
                  minWidth: "200px",
                }}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Area
                dataKey="views"
                type="natural"
                fill="var(--color-views)"
                fillOpacity={0.4}
                stroke="var(--color-views)"
              />
              <Area
                dataKey="visitors"
                type="natural"
                fill="var(--color-visitors)"
                fillOpacity={0.4}
                stroke="var(--color-visitors)"
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
} 