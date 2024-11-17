import React, { useState } from 'react'
import {
  StSearchInputField,
  StSearchInputWrapper,
} from '../styles/components/SearchInputStyle'
import { CiSearch } from 'react-icons/ci'

const SearchInput = () => {
  const [query, setQuery] = useState('')

  const handleInputChange = (e) => {
    setQuery(e.target.value)
  }
  const handleSearch = (e) => {
    e.preventDefault()
  }

  return (
    <StSearchInputWrapper onSubmit={handleSearch}>
      <CiSearch className="search-icon" />
      <StSearchInputField
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
      />
    </StSearchInputWrapper>
  )
}

export default SearchInput
