import styles from './DataTable.module.css'

const DataRow = ( props ) => {
    const keys = props.keys;
    const data = props.data;
    return <tr> { props.keys.map ( key => <td> {props.data[key]} </td>)} </tr>           
}

export default DataRow;