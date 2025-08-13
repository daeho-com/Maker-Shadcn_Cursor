import { redirect } from "react-router";

export function loader() { // 데이터를 불러오거나 유저를 다른 곳으로 리다렉트, HTTP Response를 보내서 JSON 형태로 데이터를 보내줌. 이게 loader
    return redirect("/products/leaderboards");
}
