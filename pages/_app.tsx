import '../styles/globals.sass'
import type { AppProps } from 'next/app'
import client from '../apollo-client'
import { ApolloProvider } from '@apollo/client'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
  )

}

export default MyApp
