import styles from './SimpleCard.module.css'
const SimpleCard = ( {value, label}) => {
    return (
        <div className = {styles.__SimpleCard}> 
            <div className = {styles.__SimpleCard_value}> 
                {value}
            </div>
            <div className = {styles.__SimpleCard_label}> 
                {label}
            </div>
        </div>
    )
}

export default SimpleCard;