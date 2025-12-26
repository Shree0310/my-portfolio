export const IDCard = () => {
return <div className="flex flex-col">
    <div className="p-4 h-72 dark:bg-neutral-900 bg-neutral-100 shadow-xl rounded-lg border border-neutral-500/60 dark:border-neutral-400/60">
        <div className="m-2 h-40 my-2 from-neutral-300  to-neutral-200 bg-linear-to-br dark:from-neutral-800 dark:to-neutral-700 
                        divide-neutral-500 rounded-lg dark:text-neutral-200 text-neutral-600 font-semibold text-lg flex justify-center items-center">
            Simple Card
        </div>
        <div className="my-1 mx-2 h-3 dark:bg-neutral-600 bg-neutral-300 rounded-3xl"></div>
        <div className="grid grid-cols-3 gap-2">
            <div className="my-1 ml-2 h-3 dark:bg-neutral-600 bg-neutral-300 rounded-3xl col-span-2"></div>
            <div className="my-1 mr-2 h-3 dark:bg-neutral-600 bg-neutral-300 rounded-3xl col-span-1"></div>
        </div>
        <div className="my-1 mx-2 h-3 dark:bg-neutral-600 bg-neutral-300 rounded-3xl"></div>
    </div>
</div>
}

export const ContentCard = () => {
return <div className="flex flex-col">
    <div className="p-4 h-72 dark:bg-neutral-900 bg-neutral-100 shadow-xl rounded-lg border border-neutral-500/60 dark:border-neutral-400/60">
        <div className="m-2 h-40 my-2 from-neutral-300  to-neutral-200 bg-linear-to-br dark:from-neutral-800 dark:to-neutral-700 
                        divide-neutral-500 rounded-lg dark:text-neutral-200 text-neutral-600 font-semibold text-lg flex justify-center items-center">
            Simple Card
        </div>
        <div className="my-1 mx-2 h-3 dark:bg-neutral-600 bg-neutral-300 rounded-3xl"></div>
        <div className="grid grid-cols-3 gap-2">
            <div className="my-1 ml-2 h-3 col-span-2"></div>
            <div className="my-1 mr-2 h-3 col-span-1"></div>
        </div>
        <div className="my-1 mx-2 h-3 dark:bg-neutral-600 bg-neutral-300 rounded-3xl"></div>
    </div>
</div>
}