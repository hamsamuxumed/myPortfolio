import { Container, Box, Heading, Image, useColorModeValue } from "@chakra-ui/react"



function Home() {
  return (

    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        p={3} mb={6}
        align="center"
      >
        Hello, I&apos;m a full-stack developer based in the UK
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title" >
            Hamsa Muxumed
          </Heading >
          <p>
            Art, video games and football enthusiast, with a passion for web development. I am a person who loves to learn and gain new skills, the empowering feeling of crafting a project from scratch and the satisfaction of problem solving is why I pursued a career in tech.
          </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="120px"
            display="inline-block"
            borderRadius="full"
            src="/images/Hamsa-image.jpg"
            alt="Hamsa-image"
          />
        </Box>
      </Box>

    </Container>

  )
}

export default Home
