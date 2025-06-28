import { getPost, getCommentsForPost } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { format, formatDistanceToNow } from "date-fns";
import { notFound } from "next/navigation";

export default function PostPage({ params }: { params: { id: string } }) {
  const post = getPost(params.id);
  const comments = getCommentsForPost(params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
            <Card>
                <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-4">{post.category}</Badge>
                    <CardTitle className="text-3xl font-headline">{post.title}</CardTitle>
                    <CardDescription>
                    Posted by {post.author.nickname} · {" "}
                    {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-base">
                    <p className="whitespace-pre-wrap">{post.content}</p>
                </CardContent>
            </Card>

            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-4">{comments.length} Comments</h2>
                <Card>
                    <CardContent className="p-0">
                         <div className="space-y-4 p-6">
                            {comments.map((comment, index) => (
                                <div key={comment.id}>
                                    <div className="flex items-start gap-4">
                                        <Avatar className="h-9 w-9">
                                            <AvatarImage src={comment.author.avatarUrl} />
                                            <AvatarFallback>{comment.author.firstName[0]}{comment.author.lastName[0]}</AvatarFallback>
                                        </Avatar>
                                        <div className="grid gap-1.5 w-full">
                                            <div className="flex items-center justify-between">
                                                <div className="font-semibold">{comment.author.nickname}</div>
                                                <div className="text-xs text-muted-foreground">
                                                    {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
                                                </div>
                                            </div>
                                            <p>{comment.content}</p>
                                        </div>
                                    </div>
                                    {index < comments.length - 1 && <Separator className="mt-4" />}
                                </div>
                            ))}
                            {comments.length === 0 && (
                                <p className="text-muted-foreground text-center py-4">Be the first to comment!</p>
                            )}
                         </div>
                        <Separator />
                        <div className="p-6 bg-muted/50">
                            <form className="space-y-4">
                                <Textarea placeholder="Write a comment..." className="bg-background"/>
                                <Button>Post Comment</Button>
                            </form>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>

        <div className="md:col-span-1">
            <Card>
                <CardHeader>
                    <CardTitle>About the author</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center text-center gap-4">
                    <Avatar className="h-20 w-20 border">
                        <AvatarImage src={post.author.avatarUrl} />
                        <AvatarFallback>{post.author.firstName[0]}{post.author.lastName[0]}</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                        <h3 className="font-semibold text-lg">{post.author.nickname}</h3>
                        <p className="text-sm text-muted-foreground">{post.author.firstName} {post.author.lastName}</p>
                        <p className="text-sm text-muted-foreground">{post.author.email}</p>
                    </div>
                    <Button variant="outline" className="w-full">View Profile</Button>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
