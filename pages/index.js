import { Container, Box } from "@chakra-ui/react"
// import Image from 'next/image'
//import styles from '../styles/Home.module.css'

function Home() {
  return (
    //<div className={styles.container}>
    <Container>
      <Box borderRadius="lg" bg="red" p={3}>
        <div>Hello World</div>
      </Box>
    </Container>
    //</div>
  )
}

export default Home
