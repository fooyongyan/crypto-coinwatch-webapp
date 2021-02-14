import { useState } from 'react';
import DataRow from './DataRow';
import styles from './DataTable.module.css'

/**
 * 
 * @param {Object} data 
 */
const DataTable = ( props ) => {
    const data = props.data;
    const keys = props.data.length > 0 ? Object.keys(props.data[0]) : [];
    const items = 15;
    const [page, setPage] = useState( 1 )
    const slice = () => {
        const start = (page - 1) * items
        const end = (page ) * items
        return data.slice ( start, end);
    }
    const onPrev = () => {
        console.log(page);
        const newPage = page - 1;
        setPage( newPage < 1 ? 1 : newPage);
    }

    const onNext = () => {
        console.log(page);
        const newPage = page + 1;
        setPage( newPage < 1 ? 1 : newPage);
    }

    return (
        <div className = {styles.__dataTable}> 
            <table> 
                <tr class = {styles.__dataTable_header}>
                    {keys.map( key => {
                        return <th> {key} </th>
                    })}
                </tr>
                {
                    slice().map ( d => {
                        return <DataRow data={d} keys={keys}/>
                    })
                }
            </table>
            <div className = {styles.__dataTable_control}> 
                <button onClick = {onPrev}> Prev</button>
                <button onClick = {onNext}> Next</button>
            </div>
        </div>
    )
}

export default DataTable;