import { useState } from 'react';
import DataTable from '../../components/DataTable/DataTable';
import Layout from '../../components/Layout/Layout';
import SearchInput from '../../components/SearchInput/SearchInput';
import styles from './index.module.css'
/*const coins = () => {
    
    <table> 
    {
        filteredCoins.map ( coin => {
            return coin.id ? (
                <tr> 
                    <td> {coin.id} </td>
                    <td> {coin.name} </td>
                    <td> {coin.symbol} </td>
                </tr>
            ) : <> </>
        })
    }
    </table>
}*/
const Home = ( {coins}) => {

    return ( 
        <Layout> 
            <div className = {styles.__body}>
                <DataTable data = {coins}> </DataTable> 
            </div>
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







export default Home;