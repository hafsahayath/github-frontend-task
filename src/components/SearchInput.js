import React from 'react'
import '../styles/SearchInput.css'

const SearchInput = ({searchInputText, handleSearchInputText, handleSubmit, handleClear}) => {
    return (
        <div className="search-user-container">
            <form className="form-style" onSubmit={handleSubmit}>
                <input type="text" value={searchInputText} onChange={handleSearchInputText} placeholder="username"/>
                <button className="btn submit" type="submit">Go</button>
                <button className="btn reset" type="button" onClick={handleClear}>clear</button>
            </form>
        </div>
    )
}

export default SearchInput;