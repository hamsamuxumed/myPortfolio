import { Container, Box, Heading } from "@chakra-ui/react"
// import Image from 'next/image'
//import styles from '../styles/Home.module.css'

function Home() {
  return (
    //<div className={styles.container}>
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
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
      </Box>

    </Container>
    //</div>
  )
}

export default Home
