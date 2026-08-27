"use client"
import { motion } from "motion/react";
import { useState } from "react";
import useMeasure from "react-use-measure";

export default function DrawerCard() {
  const [showExtraContent, setShowExtraContent] = useState(false);
  const [ref, bounds] = useMeasure();

  return (
    <div className="grid place-items-center w-full h-full min-h-[400px]">
      <div className="flex flex-col gap-4 items-center">
        <button
          className="bg-white dark:bg-zinc-800 text-black dark:text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors"
          onClick={() => setShowExtraContent((b) => !b)}
        >
          Toggle height
        </button>
        <motion.div
          className="bg-white dark:bg-zinc-800 rounded-2xl w-80 flex flex-col overflow-hidden border border-gray-200 dark:border-zinc-700"
          animate={{ height: bounds.height }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
        >
          <div className="p-4" ref={ref}>
            <h1 className="font-semibold text-lg text-black dark:text-white mb-2">
              Animated Drawer
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Click the button above to toggle additional content with smooth height animations.
            </p>
            {showExtraContent ? (
              <motion.p
                className="text-gray-600 dark:text-gray-400 text-sm mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                Here's the extra content! This drawer expands smoothly using spring physics
                for natural, fluid motion that feels responsive and polished.
              </motion.p>
            ) : null}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

