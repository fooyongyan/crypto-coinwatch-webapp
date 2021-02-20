import styles from './PlatformCard.module.css'

const PlatformHeader = ( {title}) => {
    return (
       <div className = {styles.__PlatformCard_Header}> 
            <p> {title} </p>
        </div>
    )
}


export default PlatformHeader;