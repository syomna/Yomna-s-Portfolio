import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function ProgressBar({ percentage }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setInterval(() => setValue((i) => (percentage !== i ? i + 20 : i)), 100);
  });
  return (
    <Box
      my={"2"}
      width={`100%`}
      height={"20px"}
      backgroundColor="white"
      borderRadius={"10"}
    >
      <Box
        width={`${value}px`}
        height={"20px"}
        backgroundColor={percentage > 60 ? "green" : "amber"}
        borderRadius={"10"}
        transitionDuration="0.2s"
        transitionTimingFunction="ease-in-out"
      ></Box>
    </Box>
  );
}

export default ProgressBar;
