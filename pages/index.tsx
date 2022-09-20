import type { NextPage } from 'next'
import Head from 'next/head'
import Container from '@material-ui/core/Container'
import List from '../src/components/list'
import ClientOnly from '../src/components/clientOnly'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Star wars</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ClientOnly>
        <Container>
          <List />
        </Container>
      </ClientOnly>
    </div>
  )
}

export default Home
