import { cn } from "@/lib/utils";
import React from "react";

const NewPortfolio = ({children, className}: {
    children: React.ReactNode,
    className?: string
}) => {
    return<div className={cn("max-w-4xl w-full mx-auto bg-white dark:bg-neutral-900 shadow-aceternity", className)}>{children}</div>
}

export default NewPortfolio;