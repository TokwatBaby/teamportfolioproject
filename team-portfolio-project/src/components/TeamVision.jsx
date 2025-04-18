import { RiLightbulbFill } from "react-icons/ri";
import { motion } from "framer-motion";

function TeamVision() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            className="px-4 sm:px-8 md:px-16 lg:px-20 pt-10 bg-[linear-gradient(to_bottom,_#0D0D0D,_#1E1E1E)]"
        >
            <div className="border-l-[3px] w-full sm:max-w-1xl border-transparent bg-clip-border">
                <div className="pl-4 sm:pl-6">
                    <div className="flex flex-wrap items-center gap-2">
                        <h2 className="text-white text-2xl font-bold pr-2">Vision</h2>
                        <RiLightbulbFill className="text-blue-400 text-4xl" />
                    </div>
                    <p className="text-white text-sm mt-2">
                        To be a leading web development team recognized for delivering cutting-edge,
                        high-performance web solutions that empower businesses and individuals worldwide. We strive to shape the
                        digital landscape with innovation, collaboration, and excellence in web development.
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default TeamVision;
