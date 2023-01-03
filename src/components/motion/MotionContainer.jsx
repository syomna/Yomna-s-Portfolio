import { motion } from "framer-motion";
import { containerAnimation } from "../../styles/style";
function MotionContainer({ children }) {
  return (
    <motion.div
      variants={containerAnimation}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
}
export default MotionContainer;
