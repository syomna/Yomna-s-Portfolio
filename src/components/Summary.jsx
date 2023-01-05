import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { FaArrowUp, FaLinkedin, FaGithub } from "react-icons/fa";
import MotionItem from "./motion/MotionItem";
import Upwork from "../assets/upwork.svg";

function Summary() {
  const CustomButton = (props) => (
    <Button
      p={"0"}
      backgroundColor={"transparent"}
      _hover={{
        backgroundColor: "transparent",
        transform: "translateY(-5px)",
        transitionDuration: "0.2s",
        transitionTimingFunction: "ease-in-out",
      }}
    >
      <Link href={props.link} isExternal>
        {props.icon}
      </Link>
    </Button>
  );
  return (
    <Box m={"auto"} p={"20"} pt={"40"} id="home">
      <MotionItem>
        <Text display={"block"} as={"b"} fontSize={"3xl"} color={"pinkish"}>
          Hello, I'm Yomna
        </Text>
      </MotionItem>
      <MotionItem>
        <Text as={"b"} fontSize={"5xl"}>
          A Mobile Apps Developer & Web Developer.
        </Text>
      </MotionItem>
      <MotionItem>
        <Flex alignItems={"center"} my={"4"} mb={"8"}>
          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&to=syomna444@gmail.com"
            isExternal
          >
            <Button
              borderTopLeftRadius={"0"}
              px={"6"}
              py={"4"}
              backgroundColor={"pinkish"}
              color={"white"}
              _hover={{
                backgroundColor: "black",
              }}
            >
              <FaArrowUp />
            </Button>
          </Link>
          <Text pl={"4"}>Let's talk</Text>
        </Flex>
      </MotionItem>
      <MotionItem>
        <Divider orientation="horizontal" width={"50%"} />
      </MotionItem>
      <MotionItem>
        <Flex my={"4"}>
          <ButtonGroup gap={"2"}>
            <CustomButton
              icon={<FaLinkedin size={"30"} color="#0078B2" />}
              link={"https://www.linkedin.com/in/yomna-s"}
            />
            <CustomButton
              icon={<FaGithub size={"30"} />}
              link={"https://github.com/syomna"}
            />
            <CustomButton
              icon={<Image src={Upwork} width={"20"} height={"20"}></Image>}
              link={"https://www.upwork.com/freelancers/~0155980773e7307264"}
            />
          </ButtonGroup>
        </Flex>
      </MotionItem>
    </Box>
  );
}

export default Summary;
