"use client"
import { motion, AnimationProps } from "framer-motion";
import React from "react";

const MotionDiv = (props: AnimationProps & {children?: React.ReactNode}) => {
return <motion.div {...props} />
}

export default MotionDiv;