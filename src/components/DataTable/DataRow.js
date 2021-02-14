import styles from './DataTable.module.css'

const DataRow = ( props ) => {
    return (
        <tr> 
        {
            props.keys.map ( key => {
                return (
                    <td> {props.data[key]} </td>
                )
            })        
        }
        </tr>           
    )
}

export default DataRow;