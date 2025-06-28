import { PostCard } from "@/components/post-card";
import { Button } from "@/components/ui/button";
import { posts } from "@/lib/data";
import { PlusCircle } from "lucide-react";

export default function ForumFeedPage() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl font-headline">Forum Feed</h1>
        <div className="ml-auto flex items-center gap-2">
            <Button size="sm" className="h-8 gap-1">
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Create Post
                </span>
            </Button>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}
