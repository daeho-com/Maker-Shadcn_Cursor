import { StarIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "~/common/components/ui/avatar";

interface ReviewCardProps {
  avatarFallback: string;
  avatarImage?: string;
  name: string;
  username: string;
  rating: number;
  reviewText: string;
  date: string;
}

export function ReviewCard({
  avatarFallback,
  avatarImage,
  name,
  username,
  rating,
  reviewText,
  date
}: ReviewCardProps) {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarFallback>{avatarFallback}</AvatarFallback>
          {avatarImage && <AvatarImage src={avatarImage} />}
        </Avatar>
        <div>
          <h4 className="text-lg font-bold">{name}</h4>
          <p className="text-sm text-muted-foreground">@{username}</p>
        </div>
      </div>
      <div className="flex text-yellow-500">
        {Array.from({ length: 5 }).map((_, index) => (
          <StarIcon 
            key={index} 
            className="size-4" 
            fill={index < rating ? "currentColor" : "none"}
          />
        ))}
      </div>
      <p className="text-sm text-muted-foreground">
        {reviewText}
      </p>
      <span className="text-sm text-muted-foreground">
        {date}
      </span>
    </div>
  );
} 