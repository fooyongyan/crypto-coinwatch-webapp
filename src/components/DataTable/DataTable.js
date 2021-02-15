import { useState } from 'react';
import DataRow from './DataRow';
import SearchInput from '../SearchInput/SearchInput'
import styles from './DataTable.module.css'

/**
 * 
 * @param {Object} data 
 */
const DataTable = ( props ) => {
    const data = props.data;
    const keys = props.data.length > 0 ? Object.keys(props.data[0]) : [];
    const items = 15;

    const [page, setPage] = useState(1)
    const [filteredSet, setFiltered] = useState(data);
    
    /**
     * Filter the entire Object based to see if it includes the searched results
     * @param {string} query 
     */
    const filter = (query) => data.filter ( e => JSON.stringify(e).includes(query))

    /**
     * Slice the Content based on the given Sets
     */
    const slice = () => {
        const length = filteredSet.length;
        const pages = Math.floor(length / items) + 1;
        console.log( pages );
        const start = (page - 1) * items
        const end = (page ) * items
        return filteredSet.slice ( start, end);
    }

    /**
     * Previous Page
     */
    const onPrev = () => {
        console.log(page);
        const newPage = page - 1;
        setPage( newPage < 1 ? 1 : newPage);
    }

    /**
     * Current Page
     */
    const onNext = () => {
        const newPage = page + 1;
        setPage( newPage < 1 ? 1 : newPage);
    }

    /**
     * Invoked when the Subject is detected
     * @param {*} ev 
     */
    const onSearch = ( ev ) => {
        /** @type {string} */
        const query = ev.target.value;
        setPage(1);
        setFiltered(filter( query.toLowerCase()));
    }

    return (
        <div className = {styles.__dataTable}> 
            <SearchInput onChange = {onSearch} />
            <table> 
                <tr className = {styles.__dataTable_header}> {keys.map( key =>  <th> {key} </th>)} </tr>
                { slice().map ( d => <DataRow key={d.id} data={d} keys={keys}/>) }
            </table>
            <div className = {styles.__dataTable_control}> 
                <button onClick = {onPrev}> Prev</button>
                <button onClick = {onNext}> Next</button>
            </div>
        </div>
    )
}

export default DataTable;