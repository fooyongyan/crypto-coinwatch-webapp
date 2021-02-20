import styles from './CoinTable.module.css'
import { Input } from 'semantic-ui-react'

const SearchModule = ({length, onSearch}) => {
    return (
        <div className = {styles.__CoinTable_searchControl}>
            <span> Records Found : {length} </span>
            <Input icon='search' placeholder='Search Coins...' onChange={onSearch}/>
        </div>
    )
}

export default SearchModule; 