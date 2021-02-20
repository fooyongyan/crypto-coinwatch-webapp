import styles from './PlatformCard.module.css'

const StatCard = ( {value, label}) => {
    return (
        <div className = {styles.__PlatformCard_Stat} > 
            <div className = {styles.__PlatformCard_Stat_Value}>
                {value}
            </div>
            <div className = {styles.__PlatformCard_Stat_Label}>
                {label}
            </div>
        </div>
    )
}


export default StatCard;