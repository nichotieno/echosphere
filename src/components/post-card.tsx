import Link from "next/link";
import { Post } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MessageSquare } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start gap-4">
            <Avatar className="h-10 w-10 border">
              <AvatarImage src={post.author.avatarUrl} alt={post.author.nickname} />
              <AvatarFallback>{post.author.firstName[0]}{post.author.lastName[0]}</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <Link href={`/dashboard/posts/${post.id}`}>
                <CardTitle className="text-xl hover:underline">{post.title}</CardTitle>
              </Link>
              <CardDescription>
                Posted by {post.author.nickname} · {" "}
                {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
              </CardDescription>
            </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-3">{post.content}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Badge variant="secondary">{post.category}</Badge>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MessageSquare className="h-4 w-4" />
            <span>{post.commentsCount} {post.commentsCount === 1 ? 'comment' : 'comments'}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
