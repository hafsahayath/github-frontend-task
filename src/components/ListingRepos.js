import React, { useState } from 'react'
import '../styles/ListingRepos.css'

const ListingRepos = ({repos}) => {
    const [searchText, setSearchText] = useState('')
    // const [filteredRepos, setFilteredrepos] = useState([])

    const handleChange = (e) => {
        setSearchText(e.target.value)
    }

    const highlight = (repoName, searchInput, id) => {
        let startIndex = repoName.toLowerCase().indexOf(searchInput)
        let endIndex = startIndex + searchInput.length;
        let firstPart = repoName.slice(0, startIndex);
        let highlightedStr = repoName.slice(startIndex, endIndex);
        let lastPart = repoName.slice(endIndex)
        return <li key={id}>{firstPart}<span style={{backgroundColor:'yellow'}}>{highlightedStr}</span>{lastPart}</li>
      }

    return (
        <div className="repo-list">
            <input className="search-repo-list" type="text" value={searchText} onChange={handleChange} placeholder="search by name"/>
            <ul>
                {repos.filter(ele=>ele.name.toLowerCase().includes(searchText.toLowerCase())).map(element=>highlight(element.name, searchText.toLowerCase(), element.id))}
            </ul>
        </div>
    )
}

export default ListingRepos;