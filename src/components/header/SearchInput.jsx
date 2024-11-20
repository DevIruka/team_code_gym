import React, { useState } from 'react'
import {
  StSearchInputField,
  StSearchInputWrapper,
} from '../../styles/components/header_style/SearchInputStyle'
import { CiSearch } from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux'
import { setQuery } from '../../redux/slices/searchQuerySlice'

// Debounce
// 파일을 새로?
const debounce = (func, delay) => {
  let timer
  return function () {
    const args = arguments
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

const SearchInput = () => {
  const query = useSelector((state) => state.searchQuery.query)
  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    dispatch(setQuery(e.target.value))
  }

  const handleSearch = (e) => {
    e.preventDefault()
    // 엔터시 검색...
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
