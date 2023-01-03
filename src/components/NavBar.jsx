import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { mainPx, navBarGradient } from "../styles/style";
import { FaCode } from "react-icons/fa";

const NavItem = (props) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      transform: "translateY(-5px)",
      transitionDuration: "0.2s",
      transitionTimingFunction: "ease-in-out",
    }}
    href={`#${props.text.toLowerCase()}`}
  >
    {props.text}
  </Link>
);

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        px={mainPx}
        // color="white"
        position="fixed"
        width={"100%"}
        backgroundColor={"white"}
        bgGradient={navBarGradient}
        zIndex={100}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Flex>
            <FaCode color={"pinkish"} />
            <Text as="b" fontSize={"2xl"} ml={"2"}>
              Portfolio
            </Text>
          </Flex>
          <IconButton
            size={"md"}
            backgroundColor={"transparent"}
            _hover={{
              backgroundColor: "transparent",
              transform: "translateY(-5px)",
              transitionDuration: "0.2s",
              transitionTimingFunction: "ease-in-out",
            }}
            icon={
              isOpen ? (
                <CloseIcon colorInterpolation={"pink"} color="black" />
              ) : (
                <HamburgerIcon outlineColor={"pink"} color="black" />
              )
            }
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            <NavItem text="Home" />
            <NavItem text="Projects" />
            <NavItem text="Skills" />
            <NavItem text="Hire me" />
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <NavItem text="Home" />
              <NavItem text="Projects" />
              <NavItem text="Skills" />
              <NavItem text="Hire me" />
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
