export const naturalEase = [0.6, 0.01, 0.05, 0.95] as [
    number,
    number,
    number,
    number
];

export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
            ease: naturalEase,
        },
    },
};
