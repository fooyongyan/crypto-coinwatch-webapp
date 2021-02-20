import { Table } from 'semantic-ui-react'

const Header = ( {cols}) => {

    return ( 
        <Table.Header>
        <Table.Row>
            {cols.map ( e => <Table.HeaderCell key = {e} textAlign = 'left' >{e}</Table.HeaderCell>)}
        </Table.Row>
        </Table.Header>
    )
}

export default Header;