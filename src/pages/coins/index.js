import { Header, Container } from 'semantic-ui-react'
import Layout from '../../components/Layout/Layout'
import CoinTable from '../../components/CoinTable/CoinTable'

export default function Home( {coins}) {
  return (
    <Layout>
      <Container fluid>
        <Header as='h2'>Tokens</Header>
        <CoinTable coins = {coins} />
      </Container>
    </Layout>
  )
}

export const getStaticProps = async () => {
  console.log('/coins');
  const response = await fetch ('https://api.coingecko.com/api/v3/coins/list');
  const coins = await response.json();
  return {
      props: {
          coins
      }
  }
}
