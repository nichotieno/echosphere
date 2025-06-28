import Link from "next/link";
import { LoginForm } from "@/components/login-form";
import { MessageSquare } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-background">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
            <Link href="/" className="flex items-center justify-center mb-4">
              <MessageSquare className="h-8 w-8 text-primary" />
              <span className="ml-2 text-2xl font-bold">EchoSphere</span>
            </Link>
          <h1 className="text-2xl font-semibold tracking-tight font-headline">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your credentials to access your account.
          </p>
        </div>
        <LoginForm />
        <p className="px-8 text-center text-sm text-muted-foreground mt-4">
          <Link
            href="/signup"
            className="underline underline-offset-4 hover:text-primary"
          >
            Don&apos;t have an account? Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
