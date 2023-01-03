import { Box, Center, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { MotionItem } from "./Motion";
import { projects } from "../constants/constants";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <Box px={"20"} id="projects">
      <MotionItem>
        <Center>
          <Heading>My Recent Projects</Heading>
        </Center>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          m={"6"}
          gap={"4"}
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
