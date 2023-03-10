import {
  Box,
  Center,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Progress,
  Text,
  VStack,
} from "@chakra-ui/react";
import MotionItem from "./motion/MotionItem";
import skills from "../constants/skills";
import { FaBootstrap } from "react-icons/fa";
import Redux from "../assets/redux.svg";
import React from "../assets/react.svg";
import Tailwind from "../assets/tailwind.svg";
import Flutter from "../assets/flutter.svg";
import Firebase from "../assets/firebase.svg";
import { mainPx } from "../styles/style";

const SkillBar = ({ title, percentage }) => (
  <GridItem mx="4">
    <Text mb={"2"} fontSize="sm">
      {title}
    </Text>
    <Progress
      value={percentage}
      width={{ base: "300px", lg: "500px" }}
      height={"15px"}
      borderRadius={"10"}
      bgColor={"white"}
      colorScheme={"green"}
    />
  </GridItem>
);

const StackSkill = ({ title, percentage, icon }) => (
  <GridItem>
    <VStack>
      <CircularProgress
        value={percentage}
        size={"100px"}
        trackColor={"white"}
        color={"green"}
      >
        <CircularProgressLabel fontSize={"md"}>
          {percentage}%
        </CircularProgressLabel>
      </CircularProgress>
      <HStack>
        {icon}
        <Text fontSize={"sm"}>{title}</Text>
      </HStack>
    </VStack>
  </GridItem>
);

function Skills() {
  const stacks = [
    {
      title: "React JS",
      percentage: 65,
      icon: <Image src={React} width={"4"} height={"4"}></Image>,
    },
    {
      title: "Redux",
      percentage: 50,
      icon: <Image src={Redux} width={"4"} height={"4"}></Image>,
    },
    {
      title: "Bootstrap",
      percentage: 70,
      icon: <FaBootstrap color="#8712FA" size={"20"} />,
    },
    {
      title: "Tailwind",
      percentage: 60,
      icon: <Image src={Tailwind} width={"4"} height={"4"}></Image>,
    },
    {
      title: "Flutter",
      percentage: 80,
      icon: <Image src={Flutter} width={"4"} height={"4"}></Image>,
    },
    {
      title: "Firebase",
      percentage: 75,
      icon: <Image src={Firebase} width={"4"} height={"4"}></Image>,
    },
  ];
  return (
    <Box px={mainPx} id="skills">
      <MotionItem>
        <Center my="8">
          <Heading>My Skills</Heading>
        </Center>
        <Center mt={"10"}>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
            }}
            gap={"4"}
          >
            {skills.map((skill, index) => (
              <SkillBar
                key={index}
                title={skill.title}
                percentage={skill.percentage}
              />
            ))}
          </Grid>
        </Center>
        <Center my={"8"}>
          <Heading>Stacks</Heading>
        </Center>
        <Center>
          <Grid
            templateColumns={{
              base: "repeat(3, 1fr)",
              md: "repeat(6, 1fr)",
            }}
            gap={"4"}
          >
            {stacks.map((stack, index) => (
              <StackSkill
                key={index}
                title={stack.title}
                percentage={stack.percentage}
                icon={stack.icon}
              />
            ))}
          </Grid>
        </Center>
      </MotionItem>
    </Box>
  );
}

export default Skills;
