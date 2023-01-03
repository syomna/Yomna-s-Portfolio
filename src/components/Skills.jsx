import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import MotionItem from "./motion/MotionItem";
import ProgressBar from "react-animated-progress-bar";
import { skills } from "../constants/constants";
import { FaBootstrap } from "react-icons/fa";
import Redux from "../assets/redux.svg";
import React from "../assets/react.svg";
import Tailwind from "../assets/tailwind.svg";
import Flutter from "../assets/flutter.svg";
import Firebase from "../assets/firebase.svg";
import { mainPx } from "../styles/style";

const SkillBar = ({ title, percentage }) => (
  <GridItem>
    <Text>{title}</Text>
    <ProgressBar
      width="400px"
      height="10px"
      rect
      fontColor="black"
      percentage={percentage}
      rectBorderRadius="20px"
      trackPathColor="transparent"
      bgColor="green"
      trackBorderColor="#b1c4b6"
    />
  </GridItem>
);

const StackSkill = ({ title, percentage, icon }) => (
  <GridItem>
    <VStack>
      <ProgressBar width="230" trackWidth="13" percentage={percentage} />
      <HStack>
        {icon}
        <Text>{title}</Text>
      </HStack>
    </VStack>
  </GridItem>
);

function Skills() {
  const stacks = [
    {
      title: "React JS",
      percentage: "65",
      icon: <Image src={React} width={"4"} height={"4"}></Image>,
    },
    {
      title: "Redux",
      percentage: "50",
      icon: <Image src={Redux} width={"4"} height={"4"}></Image>,
    },
    {
      title: "Bootstrap",
      percentage: "70",
      icon: <FaBootstrap color="#8712FA" size={"20"} />,
    },
    {
      title: "Tailwind",
      percentage: "60",
      icon: <Image src={Tailwind} width={"4"} height={"4"}></Image>,
    },
    {
      title: "Flutter",
      percentage: "80",
      icon: <Image src={Flutter} width={"4"} height={"4"}></Image>,
    },
    {
      title: "Firebase",
      percentage: "75",
      icon: <Image src={Firebase} width={"4"} height={"4"}></Image>,
    },
  ];
  return (
    <Box px={mainPx} id="skills">
      <MotionItem>
        <Flex justifyContent={"center"}>
          <Heading>My Skills</Heading>
        </Flex>
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
        <Center my={"10"}>
          <Text fontSize={"lg"}>Stacks</Text>
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
