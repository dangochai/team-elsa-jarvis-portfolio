"use client";

import { useEffect } from "react";
import { RefreshCw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-20 text-center">
      <div className="text-6xl mb-4" aria-hidden="true">⚠️</div>
      <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 sm:text-3xl">
        Something went wrong!
      </h2>
      <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-md mx-auto">
        An unexpected error occurred. Please try again or return to the home page.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
        <Button onClick={reset} variant="default">
          <RefreshCw className="h-4 w-4" aria-hidden="true" />
          Try Again
        </Button>
        <Button asChild variant="outline">
          <Link href="/">
            <Home className="h-4 w-4" aria-hidden="true" />
            Go Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
