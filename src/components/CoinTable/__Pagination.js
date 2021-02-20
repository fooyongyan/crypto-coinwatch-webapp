import { Icon, Menu, Table } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { Pagination } from 'semantic-ui-react'
import styles from './CoinTable.module.css'

const Controls = ( { onClick, pages }) => {
    return (<Pagination 
        className = {styles.__coinTable_controls}
        totalPages={pages} 
        onPageChange = {onClick} 
    />)
}

export default Controls;
