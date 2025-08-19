import { type RouteConfig, 
    index, 
    route, 
    prefix,
    layout,
 } from "@react-router/dev/routes";

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
            layout("features/products/layouts/product-overview-layout.tsx", [
                route("/overview", "features/products/pages/product-overview-page.tsx"),
                ...prefix("reviews", [
                    index("features/products/pages/product-reviews-page.tsx"),
                ]),
            ]),
        ]),
    ]),
    ...prefix("/ideas", [
        index("features/ideas/pages/ideas-page.tsx"),
        route("/:ideaID", "features/ideas/pages/idea-page.tsx"),
    ]),
    ...prefix("/jobs", [
        index("features/jobs/pages/jobs-page.tsx"),
        route("/:jobID", "features/jobs/pages/job-page.tsx"),
        route("/submit", "features/jobs/pages/submit-job-page.tsx"),
    ]),
    ...prefix("/auth", [
        layout("features/auth/layouts/auth-layout.tsx", [
            route("/login", "features/auth/pages/login-page.tsx"),
            route("/join", "features/auth/pages/join-page.tsx"),
            ...prefix("/otp", [
                route("/start", "features/auth/pages/otp-start-page.tsx"),
                route("/complete", "features/auth/pages/otp-complete-page.tsx"),
            ]),
            ...prefix("/social/:provider", [
                route("/start", "features/auth/pages/social-start-page.tsx"),
                route("/complete", "features/auth/pages/social-complete-page.tsx"),
            ]),
        ]),
    ]),
    ...prefix("/community", [
        index("features/community/pages/community-page.tsx"),
        route("/:postID", "features/community/pages/post-page.tsx"),
        route("/submit", "features/community/pages/submit-post-page.tsx"),
    ]),
    ...prefix("teams", [
        index("features/teams/pages/teams-page.tsx"),
        route("/:teamID", "features/teams/pages/team-page.tsx"),
        route("/create", "features/teams/pages/create-team-page.tsx"),
    ]),
] satisfies RouteConfig;
