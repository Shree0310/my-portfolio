import { cn } from "@/lib/utils"
import { Geist } from "next/font/google"
import Card from "./ui/Card"

export const Content = () => {
    return (
        <div className={cn(
            "h-screen flex justify-start px-20 py-10 bg-gray-50")}>
                <Card/>
        </div>
    )
}