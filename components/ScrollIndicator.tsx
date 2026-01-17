import { motion } from "motion/react";
import { Mouse } from "lucide-react";

export default function ScrollIndicator() {
    return (
        <motion.div
            className="absolute bottom-8 left-1/2 flex-col items-center gap-2 hidden md:flex"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.6,
                delay: 1,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 0.2,
            }}
        >
            <Mouse className="w-8 h-8 text-primary" aria-hidden="true" />
        </motion.div>
    );
}
