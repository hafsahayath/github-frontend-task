import React, { useState } from 'react'
import SearchInput from './SearchInput';
import axios from 'axios';
import ListingRepos from './ListingRepos';
import '../styles/Container.css'

const Container = (props) => {
    const [searchInputText, setSearchInputText] = useState('')
    const [repos, setRepos] = useState([])

    const handleSearchInputText = (e) => {
        setSearchInputText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`https://api.github.com/users/${searchInputText}/repos`)
            .then((response)=>{
                setRepos(response.data)
            })
            .catch((err)=>{
                alert(err.message)
            })
    }

    const handleClear = () => {
        setSearchInputText('');
        setRepos([]);
    }

    return (
        <div className="main-container">
            <SearchInput searchInputText={searchInputText} handleSearchInputText={handleSearchInputText} handleSubmit={handleSubmit} handleClear={handleClear}/>
            <ListingRepos repos={repos}/>
        </div>
    )
}

export default Container;