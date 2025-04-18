import { GoGoal } from "react-icons/go";
import { motion } from "framer-motion";

function TeamMission() {
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
                        <h2 className="text-white text-2xl font-bold pr-2">Mission</h2>
                        <GoGoal className="text-blue-400 text-3xl" />
                    </div>
                    <p className="text-white text-sm whitespace-pre-line mt-2">
                        Our mission is to design and develop high-quality web applications that enhance user engagement,
                        streamline business processes, and deliver outstanding digital experiences. We are committed to leveraging the latest web
                        technologies to create secure, responsive, and future-ready solutions.
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default TeamMission;

