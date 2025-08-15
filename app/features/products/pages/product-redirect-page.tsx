import { redirect } from "react-router";
import type { Route } from "./+types/product-redirect-page";

export const loader = ({params}:Route.LoaderArgs) => {
    const {productID} = params;
    return redirect(`/products/${productID}/overview`);
}