import {
  Card,
  Center,
  GridItem,
  HStack,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import {
  FaApple,
  FaArrowUp,
  FaCode,
  FaGithub,
  FaGooglePlay,
} from "react-icons/fa";
import Upwork from "../assets/upwork.svg";

function ProjectItem({ project }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <GridItem>
      <Card
        m={"4"}
        p={"8"}
        height={"250px"}
        width={"250px"}
        backgroundColor={"white"}
        borderRadius={"10"}
        onClick={onOpen}
        cursor="pointer"
        _hover={{
          backgroundColor: "#f7f2f7",
        }}
      >
        <VStack>
          <Center>
            {project.image && (
              <Image
                src={project.image}
                height={"150px"}
                width={"150px"}
                borderRadius={"10"}
              ></Image>
            )}
          </Center>

          {project.title && (
            <Text as={"b"} px={"4"} fontSize="md">
              {project.title}
            </Text>
          )}

          <Modal
            blockScrollOnMount={false}
            isOpen={isOpen}
            onClose={onClose}
            isCentered
          >
            <ModalOverlay backgroundColor={"transparent"} />
            <ModalContent px={"8"} py={"4"}>
              <Text as={"b"}>{project.title}</Text>
              <ModalCloseButton />
              <ModalBody>
                <Text fontWeight="bold" mb="1rem">
                  Summary:
                </Text>
                <Text fontWeight="bold" mb="1rem">
                  {project.modalDescription}
                </Text>
                <Text fontWeight="bold" mb="1rem">
                  Technologies:
                </Text>
                <Text fontWeight="bold" mb="1rem">
                  {project.technologies}
                </Text>
                <HStack gap={"4"}>
                  {project.onUpwork && (
                    <Link
                      href="https://www.upwork.com/freelancers/~0155980773e7307264"
                      isExternal
                      _hover={{
                        color: "pinkish",
                      }}
                    >
                      <Image
                        src={Upwork}
                        width={"16"}
                        height={"16"}
                        _hover={{
                          color: "pinkish",
                        }}
                      ></Image>
                    </Link>
                  )}
                  {project.isApp ? (
                    <HStack gap={"4"}>
                      <Link
                        href={project.playStoreLink}
                        isExternal
                        _hover={{
                          color: "pinkish",
                        }}
                      >
                        <FaGooglePlay size={"20"} cursor="pointer" />
                      </Link>
                      <Link
                        href={project.appStoreLink}
                        isExternal
                        _hover={{
                          color: "pinkish",
                        }}
                      >
                        <FaApple size={"20"} cursor="pointer" />
                      </Link>
                    </HStack>
                  ) : (
                    <HStack gap={"4"}>
                      <Link
                        href={project.websiteLink}
                        isExternal
                        _hover={{
                          color: "pinkish",
                        }}
                      >
                        <FaCode size={"20"} cursor="pointer" />
                      </Link>
                      <Link
                        href={project.githubLink}
                        isExternal
                        _hover={{
                          color: "pinkish",
                        }}
                      >
                        <FaGithub size={"20"} cursor="pointer" />
                      </Link>
                    </HStack>
                  )}
                </HStack>
              </ModalBody>
            </ModalContent>
          </Modal>
        </VStack>
      </Card>
    </GridItem>
  );
}

export default ProjectItem;
