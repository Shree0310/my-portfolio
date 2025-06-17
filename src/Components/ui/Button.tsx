
const Button = ({
    children = "Download"
}) => {
    return (
        <div className="bg-gray-800 rounded-md">
            <button className="group relative text-neutral-200 px-12 py-4 rounded-2xl bg-gray-800 shadow-lg cursor-pointer">
                {children}
            <span className="absolute group- inset-x-0 h-px bottom-0 w-3/4 mx-auto bg-gradient-to-r from-transparent via-purple-400 to-transparent">
            </span>
            <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 h-[6px] bottom-0 w-full mx-auto blur-sm bg-gradient-to-r from-transparent via-purple-400 to-transparent">
            </span>
            </button>

        </div>
    )
}
export default Button;