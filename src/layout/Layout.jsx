import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Summary from "../components/Summary";
import MotionContainer from "../components/Motion/MotionContainer";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import HireMe from "../components/HireMe";
import Footer from "../components/Footer";

function Layout() {
  const myGradient = [`linear(to-tl, pink, white)`];
  return (
    <Box w="100%" h="100%" bgGradient={myGradient}>
      <NavBar />
      <MotionContainer>
        <Summary />
        <Projects />
        <Skills />
        <HireMe />
        <Footer />
      </MotionContainer>
    </Box>
  );
}

export default Layout;
