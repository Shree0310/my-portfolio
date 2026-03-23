"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Navbar from "../Navbar/Navbar";
import ComponentsSidebar from "./ComponentsSidebar";

export default function ComponentsLibraryLayout({
  activeSection,
  children,
}: {
  activeSection: string;
  children: React.ReactNode;
}) {
  const router = useRouter();

  const onSectionChange = (section: string) => {
    if (section === "all") return router.push("/components");
    if (section === "cards") return router.push("/components/cards");
    if (section === "buttons") return router.push("/components/buttons");
    // For sections not implemented as dedicated pages yet, send user back.
    return router.push("/components");
  };

  return (
    <div className="flex min-h-screen bg-white dark:bg-neutral-950">
      <div className="hidden md:block">
        <ComponentsSidebar activeSection={activeSection} onSectionChange={onSectionChange} />
      </div>

      <main className="flex-1 min-w-0 p-0 overflow-auto">
        <Navbar />
        <div className="pt-16 sm:pt-20">{children}</div>
      </main>
    </div>
  );
}

