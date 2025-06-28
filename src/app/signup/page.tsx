import Link from "next/link";
import { SignupForm } from "@/components/signup-form";
import { MessageSquare } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-background">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <Link href="/" className="flex items-center justify-center mb-4">
            <MessageSquare className="h-8 w-8 text-primary" />
            <span className="ml-2 text-2xl font-bold">EchoSphere</span>
          </Link>
          <h1 className="text-2xl font-semibold tracking-tight font-headline">
            Create an account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your details below to create your account.
          </p>
        </div>
        <SignupForm />
        <p className="px-8 text-center text-sm text-muted-foreground mt-4">
          <Link
            href="/login"
            className="underline underline-offset-4 hover:text-primary"
          >
            Already have an account? Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
