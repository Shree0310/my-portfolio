"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { IconCopy, IconCheck } from "@tabler/icons-react";
import { Highlight, themes } from "prism-react-renderer";

interface ComponentPreviewProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  code: string;
  className?: string;
}

export const ComponentPreview = ({
  title,
  description,
  children,
  code,
  className,
}: ComponentPreviewProps) => {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("w-full", className)}>
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
          {title}
        </h3>
        {description && (
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
            {description}
          </p>
        )}
      </div>

      {/* Tabs */}
      <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-700">
        <div className="flex gap-4">
          <button
            onClick={() => setActiveTab("preview")}
            className={cn(
              "pb-2 text-sm font-medium transition-colors",
              activeTab === "preview"
                ? "border-b-2 border-neutral-800 text-neutral-800 dark:border-neutral-200 dark:text-neutral-200"
                : "text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
            )}
          >
            Preview
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={cn(
              "pb-2 text-sm font-medium transition-colors",
              activeTab === "code"
                ? "border-b-2 border-neutral-800 text-neutral-800 dark:border-neutral-200 dark:text-neutral-200"
                : "text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
            )}
          >
            Code
          </button>
        </div>

        {activeTab === "code" && (
          <button
            onClick={handleCopy}
            className="mb-2 flex items-center gap-1 rounded-md px-2 py-1 text-xs text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-300"
          >
            {copied ? (
              <>
                <IconCheck size={14} />
                Copied
              </>
            ) : (
              <>
                <IconCopy size={14} />
                Copy
              </>
            )}
          </button>
        )}
      </div>

      {/* Content */}
      <div className="mt-4">
        {activeTab === "preview" ? (
          <div className="flex min-h-[200px] items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 p-8 dark:border-neutral-700 dark:bg-neutral-900">
            {children}
          </div>
        ) : (
          <div className="relative overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 min-h-[200px]">
            <Highlight theme={themes.nightOwl} code={code.trim()} language="tsx">
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre
                  className={cn(className, "overflow-x-auto p-4 text-xs sm:text-sm")}
                  style={{ ...style, background: "transparent", backgroundColor: "transparent" }}
                >
                  {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line })}>
                      <span className="mr-4 inline-block w-8 select-none text-right text-neutral-500">
                        {i + 1}
                      </span>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComponentPreview;