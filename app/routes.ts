import { type RouteConfig, index, route, prefix } from "@react-router/dev/routes";

export default [
    index("common/pages/home-page.tsx"),
    ...prefix("products", [
        index("features/products/pages/products-page.tsx"),
        ...prefix("leaderboards", [
            index("features/products/pages/leaderboards-page.tsx"),
            route("/yearly/:year", "features/products/pages/yearly-leaderboard-page.tsx"),
            route("/monthly/:year/:month", "features/products/pages/monthly-leaderboard-page.tsx"),
            route("/weekly/:year/:week", "features/products/pages/weekly-leaderboard-page.tsx"),
            route("/daily/:year/:month/:day", "features/products/pages/daily-leaderboard-page.tsx"),
            route("/:period", "features/products/pages/leaderboard-redirection-page.tsx"),
        ]),
        ...prefix("categories", [
            index("features/products/pages/categories-page.tsx"),
            route("/:category", "features/products/pages/category-page.tsx"),
        ]),
        ...prefix("search", [
            index("features/products/pages/search-page.tsx"),
        ]),
        ...prefix("submit", [
            index("features/products/pages/submit-page.tsx"),
        ]),
        ...prefix("promote", [
            index("features/products/pages/promote-page.tsx"),
        ]),
        ...prefix("/:productID", [
            index("features/products/pages/product-redirect-page.tsx"),
            route("/overview", "features/products/pages/product-overview-page.tsx"),
            ...prefix("reviews", [
                index("features/products/pages/product-reviews-page.tsx"),
                route("/new", "features/products/pages/new-product-review-page.tsx"),
            ]),
        ]),
    ])
] satisfies RouteConfig;
