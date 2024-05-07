import { Container, Heading, Text, VStack, Image, Box, Link } from "@chakra-ui/react";
import { FaNewspaper } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={2}>
            <FaNewspaper /> The New York Times
          </Heading>
          <Text fontSize="lg" color="gray.500">
            Breaking News, World News & Multimedia
          </Text>
        </Box>
        <Image src="https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxOZXclMjBZb3JrJTIwQ2l0eSUyMHNreWxpbmV8ZW58MHx8fHwxNzE1MDQ3NDMyfDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" />
        <VStack align="start" spacing={4}>
          <Heading as="h2" size="xl">
            Major Breakthrough in Renewable Energy
          </Heading>
          <Text>In a stunning development, scientists from around the globe have collaborated to create a new form of renewable energy that promises to revolutionize the industry. This new technology, which harnesses the power of quantum mechanics, could potentially provide limitless clean energy to the world.</Text>
          <Text>The breakthrough was announced yesterday at the International Conference on Renewable Energy in New York City, where researchers detailed the process and demonstrated its potential. The new technology is expected to be commercially available within the next decade, offering a sustainable and eco-friendly alternative to fossil fuels.</Text>
          <Link color="teal.500" href="#" isExternal>
            Read more...
          </Link>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
