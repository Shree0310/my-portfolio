"use client"

import ButtonUI, { BorderBeamButton, SimpleButton } from "./Playground/Button";

const Components = () => {
    return <div className="div">
        <h3 className="text-xl py-6 font-semibold dark:text-neutral-300 text-neutral-600">Components</h3>
        <div className="grid grid-cols-3 gap-2 ">
            <div className="dark:bg-neutral-800 h-64 w-64 rounded-md shadow-2xl border border-neutral-300 dark:border-neutral-400">
                <h1 className="p-2 dark:text-neutral-300  text-neutral-600 text-[16px] border-b dark:border-neutral-300 border-neutral-600 font-semibold">Button</h1>
                <ButtonUI/>
            </div>
             <div className="dark:bg-neutral-800 h-64 w-64 rounded-md shadow-2xl border border-neutral-300 dark:border-neutral-400">
                <h1 className="p-2 dark:text-neutral-300  text-neutral-600 text-[16px] border-b dark:border-neutral-300 border-neutral-600 font-semibold">Border Beam Button</h1>
                    <BorderBeamButton/>
            </div>
             <div className="dark:bg-neutral-800 h-64 w-64 rounded-md shadow-2xl border border-neutral-300 dark:border-neutral-400">
                <h1 className="p-2 dark:text-neutral-300  text-neutral-600 text-[16px] border-b dark:border-neutral-300 border-neutral-600 font-semibold">Usual</h1>
                <SimpleButton/>
            </div>
        </div>
        </div>
}
export default Components;