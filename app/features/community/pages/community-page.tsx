import type { Route } from "./+types/community-page";
import {Hero} from "~/common/components/hero";
import { Link } from "react-router";
import { Button } from "~/common/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuCheckboxItem, DropdownMenuTrigger } from "~/common/components/ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";
import { SORT_OPTIONS, PERIOD_OPTIONS } from "../constants";
import { useSearchParams } from "react-router";
import { Form } from "react-router";
import { Input } from "~/common/components/ui/input";
import { SearchIcon } from "lucide-react";
import PostCard from "~/features/community/components/post-card";
import { getTopics, getPosts } from "../queries";


export const meta: Route.MetaFunction = () => {
    return [
        { title: "Community" },
    ]
}

export const loader = async () => {
    const topics = await getTopics();
    const posts = await getPosts();
    return { topics, posts };
}

export default function CommunityPage({loaderData}: Route.ComponentProps) {
    const [searchParams, setSearchParams] = useSearchParams();
    const sort = searchParams.get("sort") || "newest";
    const period = searchParams.get("period") || "all";

    return (
        <div>
            <Hero 
            title = "Community" 
            subtitle = "Share your ideas, ask questions, and connect with others." />
            <div className = "grid grid-cols-6 items-start gap-40">
                <div className = "col-span-4 space-y-10">
                    <div className = "flex justify-between">
                        <div className = "space-y-5 w-full">
                            <div className = "flex items-center gap-5">
                                <DropdownMenu>
                                    <DropdownMenuTrigger className = "flex items-center gap-1">
                                        <span className = "text-sm capitalize">{sort}</span>
                                        <ChevronDownIcon className = "size-4" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        {SORT_OPTIONS.map((option) => (
                                            <DropdownMenuCheckboxItem className = "capitalize cursor-pointer" 
                                                key = {option}
                                                onCheckedChange = {(checked:boolean) => {
                                                    if (checked) {
                                                        searchParams.set("sort", option);
                                                        setSearchParams(searchParams);
                                                    }
                                                }}
                                                >
                                                {option}
                                            </DropdownMenuCheckboxItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                {sort === "popular" && (
                                    <DropdownMenu>
                                        <DropdownMenuTrigger className = "flex items-center gap-1">
                                            <span className = "text-sm capitalize">{period}</span>
                                            <ChevronDownIcon className = "size-4" />
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            {PERIOD_OPTIONS.map((option) => (
                                                <DropdownMenuCheckboxItem className = "capitalize cursor-pointer" 
                                                    key = {option}
                                                    onCheckedChange = {(checked:boolean) => {
                                                        if (checked) {
                                                            searchParams.set("period", option);
                                                            setSearchParams(searchParams);
                                                        }
                                                    }}
                                                    >
                                                    {option}
                                                </DropdownMenuCheckboxItem>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                )}
                            </div>
                            <Form className = "w-2/3">
                            <Input 
                                type = "text" 
                                name = "search" 
                                placeholder = "Search for discussions" 
                            />
                        </Form>
                        </div>
                        <Button asChild>
                            <Link to = "/community/submit">Create Discussion</Link>
                        </Button>
                    </div>
                    <div className = "space-y-5">
                        {loaderData.posts.map((post) => (
                            <PostCard
                            key={post.post_id}
                            id={post.post_id!}
                            title={post.title!}
                            author={post.author!}
                            category={post.topic!}
                            timeAgo={post.created_at!}
                            avatarSrc={post.author_avatar}
                            upvotes={post.upvotes!}
                            expanded 
                            />
                            ))}
                    </div>
                </div>
                <aside className = "col-span-2 space-y-4">
                    <span className = "text-sm text-muted-foreground font-bold uppercase">Topics</span>
                    <div className = "flex flex-col gap-4 items-start">
                        {loaderData.topics.map((topic) => (
                        <Button asChild variant = "link" key = {topic.slug} className = "pl-0">
                            <Link to = {`/community?topic=${topic.slug}`}>
                                {topic.topic}
                            </Link>
                        </Button>
                        ))}
                    </div>
                </aside>
            </div>
        </div>
    )
}