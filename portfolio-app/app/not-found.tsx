import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-20 text-center">
      {/* 404 Number */}
      <div className="text-8xl font-black text-indigo-100 dark:text-indigo-950 select-none mb-4" aria-hidden="true">
        404
      </div>

      <div className="-mt-8">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 sm:text-3xl">
          Page Not Found
        </h1>
        <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-md mx-auto">
          Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved,
          deleted, or you may have typed the wrong URL.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
          <Button asChild variant="default">
            <Link href="/">
              <Home className="h-4 w-4" aria-hidden="true" />
              Go Home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/portfolio">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              View Portfolio
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
