import { motion } from "framer-motion";
import { containerAnimation, itemAnimation } from "../styles/style";
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

function MotionItem({ children }) {
  return <motion.div variants={itemAnimation}>{children}</motion.div>;
}
export { MotionContainer, MotionItem };
