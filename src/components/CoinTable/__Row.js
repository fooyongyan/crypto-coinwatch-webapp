import { Table } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const Row = ( { coin}) => {
  return ( 
    <Table.Row >
            <Table.HeaderCell> {coin.symbol}</Table.HeaderCell>
            <Table.HeaderCell> {coin.id}</Table.HeaderCell>
            <Table.HeaderCell> {coin.name} </Table.HeaderCell>
            <Table.HeaderCell>  </Table.HeaderCell>
    </Table.Row>
  )
}
  
export default Row