import { Box, Flex, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box py={"8"} backgroundColor={"pinkish"} color={"white"}>
      <Flex justifyContent={"space-evenly"}>
        <Text>© 2023 Copy right Yomna Salah</Text>
        <Text>Made with ❤ </Text>
      </Flex>
    </Box>
  );
}

export default Footer;
