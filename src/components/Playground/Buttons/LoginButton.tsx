"use client"

import { useState } from "react";
import { Spinner } from "../Spinner/Spinner";
import { AnimatePresence, motion } from "framer-motion";


export default function LoginButton() {

    const ButtonCopy = {
        idle: "Send me a log in link",
        loading: <Spinner size={16} color="rgba(255, 255, 255, 0.65)"/>,
        success: "Login Link Sent"
    }

    const variants = {
        initial: {opacity: 0, y: -25},
        visible: { opacity: 1, y: 0},
        exit: {opacity: 0, y: 25}
    }

    const [buttonState, setButtonState] = useState<keyof typeof ButtonCopy>("idle");


    const handleLogin = () => {
        if(buttonState === "success") return;
        setButtonState("loading");

        setTimeout(() => {
            setButtonState("success")
        }, 1750)

        setTimeout(() => {
            setButtonState("idle")
        }, 3500)
    }

    return (
        <div className="">
            <button onClick={handleLogin} className="blue-button cursor-pointer" disabled={buttonState === "loading"}>
                <AnimatePresence mode="popLayout" initial={false}>
                    <motion.span 
                        key={buttonState}
                        transition={{ type: "spring", duration: 0.5, bounce: 0.3}}
                        initial="initial"
                        animate="visible"
                        exit="exit"
                        variants={variants}>
                        {ButtonCopy[buttonState]}
                    </motion.span>
                </AnimatePresence>

            </button>
        </div>
    )
}