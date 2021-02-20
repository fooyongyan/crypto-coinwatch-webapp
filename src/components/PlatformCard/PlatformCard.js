import styles from './PlatformCard.module.css'
import StatCard from './__StatCard'
import PlatformHeader from './__PlatformHeader'

/**
 * @typedef PlatformCardProps 
 * @property {object} data Platform Summary Data
 * 
 * @param {Props} param0 
 */
const PlatformCard = ( {data}) => {

    return (
    <div className = {styles.__PlatformCard}> 
        <PlatformHeader title = { data.title}/>
        <div className = {styles.__PlatformCard_Stats}> 
            { data.stats.map ( e =>  <StatCard key = {e.label} value= {e.value} label = {e.label} />)}
        </div>
    </div>
    )
}

export default PlatformCard;