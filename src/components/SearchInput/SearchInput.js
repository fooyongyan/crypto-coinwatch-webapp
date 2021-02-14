import styles from './SearchInput.module.css'
const SearchInput = ( {onChange}) => {
    return (
        <div className = {styles.__searchInput}> 
            <input placeholder="Enter Coin Symbol or Name" onChange = { (ev) => onChange (ev)}/>
        </div>
    )
}

export default SearchInput;
