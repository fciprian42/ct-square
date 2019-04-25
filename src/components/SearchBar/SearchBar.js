import React from 'react'
import PropTypes from 'prop-types'
import { InputBase, IconButton} from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './SearchBar.scss'

const SearchBar = ({onSearch}) => {
    const handleChange = (event) => {
        if (event) {
            onSearch(event.target.value);
        }
    }
    
    return (
        <div className={styles.searchBar}>
            <InputBase onChange={handleChange} placeholder="Rechercher un contact" />
            <IconButton>
                <FontAwesomeIcon icon={['fal', 'search']} />
            </IconButton>
        </div>
    )
}

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired
}

export default SearchBar