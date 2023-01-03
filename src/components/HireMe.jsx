import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Select,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { mainPx } from "../styles/style";
import { MotionItem } from "./Motion";

function HireMe() {
  const onHover = {
    borderColor: "amber",
  };

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  return (
    <Box px={mainPx} py={"20"} id="hire me">
      <MotionItem>
        <VStack>
          <Center>
            <Heading>Hire Me</Heading>
          </Center>
          <VStack
            width={{
              base: "100%",
              md: "70%",
            }}
            spacing={4}
          >
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input
                id="email"
                type="email"
                borderColor={"black"}
                _hover={onHover}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Subject</FormLabel>
              <Select
                placeholder="Select subject"
                borderColor={"black"}
                _hover={onHover}
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              >
                <option>Freelance Project</option>
                <option>Full/Part Time Job</option>
                <option>Consultation</option>
              </Select>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea
                borderColor={"black"}
                _hover={onHover}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></Textarea>
            </FormControl>

            <Button
              width={"100%"}
              backgroundColor={"black"}
              color={"white"}
              type={"submit"}
              _hover={{
                backgroundColor: "pinkish",
              }}
              disabled={!email || !subject || !message || !validateEmail(email)}
            >
              {email && subject && message && validateEmail(email) ? (
                <Link
                  href={`mailto:syomna444@gmail?subject=${subject}&body=${message}`}
                  _hover={{
                    textDecoration: "none",
                  }}
                >
                  Send
                </Link>
              ) : (
                <Text>Send</Text>
              )}
            </Button>
          </VStack>
        </VStack>
      </MotionItem>
    </Box>
  );
}

export default HireMe;
