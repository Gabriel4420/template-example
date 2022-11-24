import styles from './styles.module.css'
import { Heading } from '@chakra-ui/react'

const Home = () => {
  return (
    <main className={styles.container} role="main">
      <Heading color="orange.600" size="4xl" p="10">
        Salve Quebrada
      </Heading>
    </main>
  )
}

export default Home
