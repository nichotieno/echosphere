import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MessageSquare, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link href="/" className="flex items-center justify-center" prefetch={false}>
          <MessageSquare className="h-6 w-6 text-primary" />
          <span className="ml-2 text-xl font-bold">EchoSphere</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button variant="ghost" asChild>
            <Link href="/login" prefetch={false}>
              Login
            </Link>
          </Button>
          <Button asChild>
            <Link href="/signup" prefetch={false}>
              Sign Up
            </Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    Join the Conversation on EchoSphere
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    A vibrant community for real-time discussions, posts, and private messaging. Share your thoughts and connect with others.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/signup" prefetch={false}>Get Started</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/dashboard" prefetch={false}>Explore Forum</Link>
                  </Button>
                </div>
              </div>
              <img
                src="https://placehold.co/600x400.png"
                data-ai-hint="community discussion"
                width="600"
                height="400"
                alt="Community"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Connect and Share Instantly</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  EchoSphere provides all the tools you need for a rich online community experience, from public forums to private chats.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                <div className="grid gap-4 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Users className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold">Public Forums</h3>
                    <p className="text-muted-foreground">
                        Engage in categorized public forums and share your ideas with the entire community.
                    </p>
                </div>
                <div className="grid gap-4 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <MessageSquare className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold">Private Chat</h3>
                    <p className="text-muted-foreground">
                        Have one-on-one conversations with our real-time private messaging system.
                    </p>
                </div>
                <div className="grid gap-4 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    </div>
                    <h3 className="text-xl font-bold">Secure & Personal</h3>
                    <p className="text-muted-foreground">
                        Your data is safe. Create a profile that represents you and manage your presence.
                    </p>
                </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 EchoSphere. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
