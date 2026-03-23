"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  IconCards,
  IconMenu2,
  IconForms,
  IconLayout,
  IconClick,
  IconChevronRight,
} from "@tabler/icons-react";

interface SidebarItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const sidebarItems: SidebarItem[] = [
  { id: "all", label: "All Components", icon: <IconLayout size={18} /> },
  { id: "cards", label: "Cards", icon: <IconCards size={18} /> },
  { id: "menu", label: "Menu & Tabs", icon: <IconMenu2 size={18} /> },
  { id: "buttons", label: "Buttons", icon: <IconClick size={18} /> },
  { id: "inputs", label: "Inputs", icon: <IconForms size={18} /> },
  { id: "layouts", label: "Layouts", icon: <IconLayout size={18} /> },
];

interface ComponentsSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  className?: string;
}

export const ComponentsSidebar = ({
  activeSection,
  onSectionChange,
  className,
}: ComponentsSidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "sticky top-0 h-screen border-r border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 transition-all duration-300",
        isCollapsed ? "w-16" : "w-64",
        className
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-700">
        {!isCollapsed && (
          <h2 className="font-semibold text-neutral-800 dark:text-neutral-200">
            Components
          </h2>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800"
        >
          <IconChevronRight
            size={18}
            className={cn(
              "transition-transform text-neutral-600 dark:text-neutral-400",
              isCollapsed ? "rotate-0" : "rotate-180"
            )}
          />
        </button>
      </div>

      <nav className="p-2">
        <ul className="space-y-1">
          {sidebarItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onSectionChange(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                  activeSection === item.id
                    ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-medium"
                    : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
                )}
              >
                <span className="shrink-0">{item.icon}</span>
                {!isCollapsed && <span>{item.label}</span>}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default ComponentsSidebar;