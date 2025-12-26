import { Input } from "@/components/ui/input";

export const InputDefault = () => {
    return <div className="flex justify-center items-center h-56">
         <Input type="email" placeholder="Email" className="w-60 border focus:border-cyan-600"/>
    </div>
}