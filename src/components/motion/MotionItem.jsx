import { motion } from "framer-motion";
import { itemAnimation } from "../../styles/style";

function MotionItem({ children }) {
  return <motion.div variants={itemAnimation}>{children}</motion.div>;
}

export default MotionItem;
