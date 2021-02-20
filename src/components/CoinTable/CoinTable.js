import { Table, Pagination } from 'semantic-ui-react'
import Row from './__Row';
import Controls from './__Pagination';
import SearchControl from './__SearchControl';
import TableHeader from './__Header';
import 'semantic-ui-css/semantic.min.css'
import { useState } from 'react';
import styles from './CoinTable.module.css'

const TableComponent = ({coins}) => {
    return (
        <Table unstackable >
            <TableHeader cols={['Symbol', 'Id', 'Name', 'Actions']}/>
            <Table.Body> { coins.map ( e => <Row key = {e.id} coin={e}/> )} </Table.Body>
        </Table>
    )
}

const CoinTable = ( {coins}) => {
    const items = 20;
    
    const coinList = coins.sort( (a,b) => (a.symbol > b.id) ? 1 : ((b.symbol > a.symbol) ? -1 : 0));

    const [data, setData] = useState ( {
        pages: Math.floor(coins.length / items ),
        filtered: coinList,
        activePage: 1
    })


    const onSearch  = ( event ) => {
        const results = coins.filter(e => {
            return JSON.stringify (e).toLowerCase().includes ( event.target.value.toLowerCase())
        })
        console.log( results);
        setData({
            filtered: results,
            activePage: 1,
            pages: Math.floor(results.length / items ) + 1
        });
    }

    const onClick = ( event, evData ) => {
        const res = evData.activePage;
        setData ( {
            ...data,
            activePage: res
        })
    }

    const getRecords = () => {
        const start = (data.activePage - 1) * items;
        const end = start + items;
        return data.filtered.slice( start, end);
    }

    console.log( data.pages);
    return (
        <div className = {styles.__coinTable}> 
            <SearchControl length = {data.filtered.length} onSearch = {onSearch} /> 
            <TableComponent coins = {getRecords()} />
            <Controls onClick = {onClick} pages={data.pages} />
        </div>
    )  
   
}
  
export default CoinTable