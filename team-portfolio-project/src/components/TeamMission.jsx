import { GoGoal } from "react-icons/go";
import { motion } from "framer-motion";

function TeamMission(){
    return(
        <motion.div
        initial={{ opacity: 0, x: -100 }}       
        whileInView={{ opacity: 1, x: 0 }}      
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        className="px-20 pt-10"
        >
            <div className="border-l-[3px] w-290 bg-gradient-to-b from-cyan-400 to-purple-600 border-transparent bg-clip-border">
                <div className="pl-6">
                    <div className="flex items-center">
                        <h2 className="text-white text-2xl font-bold pr-2">Mission</h2><GoGoal className="text-blue-400 text-3xl"/>
                    </div>
                    <p className="text-white text-sm">Our mission is to design and develop high-quality web applications that enhance user engagement,
                         streamline business processes, and deliver outstanding digital experiences. We are committed to leveraging the latest web 
                         technologies to create secure, responsive, and future-ready solutions.</p>
                </div>
            </div>
        </motion.div>
        
    );
    
}

export default TeamMission;
