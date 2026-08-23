"use client"

import { useState } from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import { Copy, Check } from 'lucide-react';


export default function CopyButton() {
  const [copied, setCopied] = useState(false);

  const variants ={
    hidden: {opacity: 0, scale: 0.5},
    visible: {opacity: 1, scale: 1}
  }

  const handleCopy = () => {
    // TODO: Implement copy functionality
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      aria-label='copy code snippet'
      onClick={handleCopy}
      className="px-4 py-2 rounded-lg border transition-all duration-200 cursor-pointer"
      style={{
        borderColor: 'var(--border-medium)',
        backgroundColor: 'var(--surface-subtle)',
        color: 'var(--text)',
      }}
    >
      <AnimatePresence mode='wait' initial={false}>
        {copied ? (
          <motion.span
            key="checked"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden">
            <Check/>
          </motion.span>) :
          (<motion.span
            key="copied"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden">
            <Copy/>
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}
