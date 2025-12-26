"use client"
import { motion } from "framer-motion";
import React from "react";

const MotionDiv = (props: React.ComponentProps<typeof motion.div>) => {
  return <motion.div {...props} />;
}

export default MotionDiv;