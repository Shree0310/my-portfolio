const GlassCard = () => {
    return (
        <div className="relative p-6 rounded-2xl
            bg-white/10 dark:bg-white/5
            backdrop-blur-lg
            border border-white/20
            shadow-xl
            hover:bg-white/20 transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Glass Card
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
                This is a liquid glass effect
            </p>
        </div>
    );
};