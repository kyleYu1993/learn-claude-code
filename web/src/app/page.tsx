"use client";

import { useEffect } from "react";
import { buildLocaleHref } from "@/lib/internal-href";

export default function RootPage() {
  const englishHref = buildLocaleHref("en");

  useEffect(() => {
    window.location.replace(englishHref);
  }, [englishHref]);

  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <p className="text-sm text-center">
        Redirecting to the English docs...{" "}
        <a href={englishHref} className="underline underline-offset-4">
          Continue manually
        </a>
      </p>
    </main>
  );
}
