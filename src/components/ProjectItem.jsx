import {
  Button,
  Card,
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

const StoresButtons = ({ icon, link }) => {
  return (
    <Link href={link} isExternal>
      <Button
        borderTopLeftRadius={"0"}
        px={"4"}
        py={"4"}
        backgroundColor={"black"}
        color={"white"}
        _hover={{
          backgroundColor: "pinkish",
        }}
      >
        {icon}
      </Button>
    </Link>
  );
};

function ProjectItem({ project }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <GridItem>
      <Card
        m={"4"}
        p={"4"}
        height={"80"}
        width={"80"}
        backgroundColor={"white"}
        borderRadius={"10"}
      >
        <VStack>
          {project.image && (
            <Image
              src={project.image}
              height={"50%"}
              width={"50%"}
              borderRadius={"10"}
            ></Image>
          )}
          {project.title && (
            <Text as={"b"} px={"4"}>
              {project.title}
            </Text>
          )}
          {project.description && (
            <HStack>
              <Text px={"4"}>{project.description}</Text>
              <Button
                borderTopLeftRadius={"50%"}
                px={"4"}
                py={"4"}
                backgroundColor={"black"}
                color={"white"}
                _hover={{
                  backgroundColor: "pinkish",
                }}
                onClick={onOpen}
              >
                <FaArrowUp />
              </Button>
            </HStack>
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
                {project.onUpwork && (
                  <Link
                    href="https://www.upwork.com/freelancers/~0155980773e7307264"
                    isExternal
                  >
                    <Text as={"b"} color={"green"}>
                      On upwork
                    </Text>
                  </Link>
                )}
              </ModalBody>
            </ModalContent>
          </Modal>

          {project.isApp ? (
            <HStack>
              <StoresButtons
                icon={<FaGooglePlay size={"20"} />}
                link={project.playStoreLink}
              />
              <StoresButtons
                icon={<FaApple size={"20"} />}
                link={project.appStoreLink}
              />
            </HStack>
          ) : (
            <HStack>
              <StoresButtons
                icon={<FaCode size={"20"} />}
                link={project.websiteLink}
              />
              <StoresButtons
                icon={<FaGithub size={"20"} />}
                link={project.githubLink}
              />
            </HStack>
          )}
        </VStack>
      </Card>
    </GridItem>
  );
}

export default ProjectItem;
