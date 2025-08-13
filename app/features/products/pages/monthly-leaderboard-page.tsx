import type { Route } from "./+types/monthly-leaderboard-page";
import { data, isRouteErrorResponse, Link } from "react-router";
import { DateTime } from "luxon";
import { z } from "zod";
import { Hero } from "~/common/components/hero";
import ProductCard from "~/features/products/components/product-card";
import { Button } from "~/common/components/ui/button";
import ProductPagination from "~/common/components/product-pagination";

const paramsSchema = z.object({
  year: z.coerce.number(),
  month: z.coerce.number(),
});

export const loader = ({params}: Route.LoaderArgs) => {
  const {success, data: parsedData} = paramsSchema.safeParse(params);
  if(!success) {
    throw data(
      {
        error_code : "invalid_date",
        message : "Invalid date",
      },
      {status: 400}
    )
  }
  const date = DateTime.fromObject({
      year: parsedData.year,
      month: parsedData.month,
  }).setZone("Asia/Seoul");
  if(!date.isValid) {
    throw data(
      {
        error_code : "invalid_date",
        message : "Invalid date",
      },
      {status: 400}
    )
  }
  const today = DateTime.now().setZone("Asia/Seoul").startOf("month");
  if (date > today) {
    throw data(
      {
        error_code : "future_date",
        message : "Future date",
      },
      {status: 400}
    )
  }
  return {
    ...parsedData,
  }
}

export default function MonthlyLeaderboardPage({loaderData}: Route.ComponentProps) {
  const urlDate = DateTime.fromObject({
    year: loaderData.year,
    month: loaderData.month,
  }).setZone("Asia/Seoul");
  const previousMonth = urlDate.minus({months: 1});
  const nextMonth = urlDate.plus({months: 1});
  const isCurrentMonth = urlDate.startOf("month").equals(DateTime.now().setZone("Asia/Seoul").startOf("month")); 
  return <div className = "space-y-5">
    <Hero title= {`Best of ${urlDate
      .toLocaleString({
        month: "long",
        year: "2-digit",
      })}`} />
    <div className = "flex justify-center items-center gap-2">
      <Button variant = "secondary" asChild>
        <Link to = {`/products/leaderboards/monthly/${previousMonth.year}/${previousMonth.month}`}>
          &larr;{previousMonth.toLocaleString({
            month: "long",
            year: "2-digit",
          })}
        </Link>
      </Button>
      {!isCurrentMonth ? (
        <Button variant = "secondary" asChild>
          <Link to = {`/products/leaderboards/monthly/${nextMonth.year}/${nextMonth.month}`}>
            {nextMonth.toLocaleString({
              month: "long",
              year: "2-digit",
            })} &rarr;
          </Link>
        </Button>
      ) : null}
    </div>
    <div className = "space-y-5 w-full max-w-screen-md mx-auto">
      {Array.from({length: 11}).map((_, index) => (
            <ProductCard
            productId={`product-${index}`}
            name={`Product Name ${index}`}
            description={`Product Description ${index}`}
            comments={12}
            views={12}
            upvotes={120}
          />
          ))}
    </div>
    <ProductPagination totalPages = {10} />

  </div>;
}

export function ErrorBoundary({error}: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error)) {
    return <div>{error.data.message} / {error.data.error_code}</div>;
  }
  if (error instanceof Error) {
    return <div>{error.message}</div>;
  }
  return <div>Unknown Errors</div>;

}