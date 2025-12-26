export const IDCard = () => {
return <div className="flex flex-col">
    <div className="p-4 h-72 dark:bg-neutral-900 bg-neutral-300 shadow-xl rounded-lg border border-neutral-600 dark:border-neutral-400/60">
        <div className="m-2 h-40 my-2 from-neutral-400 via-neutral-200 to-neutral-400 bg-linear-to-br dark:from-neutral-700 dark:via-neutral-600 dark:to-neutral-500 
                        divide-neutral-500 rounded-lg"></div>
        <div className="my-1 mx-2 h-3 bg-neutral-600 rounded-3xl"></div>
        <div className="grid grid-cols-3 gap-1">
            <div className="my-1 mx-2 h-3 bg-neutral-600 rounded-3xl col-span-2"></div>
            <div className="my-1 mx-2 h-3 bg-neutral-600 rounded-3xl col-span-1"></div>
        </div>
        <div className="my-1 mx-2 h-3 bg-neutral-600 rounded-3xl"></div>
    </div>
</div>
}