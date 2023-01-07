import { Box, Center, Grid, Heading } from "@chakra-ui/react";
import MotionItem from "./motion/MotionItem";
import projects from "../constants/projects.js";
import ProjectItem from "./ProjectItem";
import { mainPx } from "../styles/style";

function Projects() {
  return (
    <Box px={mainPx} id="projects">
      <MotionItem>
        <Center mb="8">
          <Heading>My Recent Projects</Heading>
        </Center>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          m={"2"}
          gap={"2"}
        >
          {projects.map((project, index) => {
            return <ProjectItem key={index} project={project} />;
          })}
        </Grid>
      </MotionItem>
    </Box>
  );
}

export default Projects;
