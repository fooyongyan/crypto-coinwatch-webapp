import styles from './DataTable.module.css'
import Link from 'next/link';
const DataRow = ( props ) => {
    const keys = props.keys;
    const data = props.data;
    return (
        <Link href = {`/coins/${data.id}`}>
            <tr> { props.keys.map ( key => <td> {data[key]} </td>)} </tr>           
        </Link>
    )
}

export default DataRow;