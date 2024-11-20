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
  const [searchInput, setSearchInput] = useState('');
  const dispatch = useDispatch()

  const debouncedSearch = React.useCallback(
    debounce((value) => {
      console.log('Debounced Query:', value)
      dispatch(setQuery(value))
    }, 500),
    []
  )

  const handleInputChange = (e) => {
    // input의 value도 바꿔주고
    setSearchInput(e.target.value)

    // debounce도 실행
    debouncedSearch(e.target.value)
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
        value={searchInput}
        onChange={handleInputChange}
        placeholder="Search..."
      />
    </StSearchInputWrapper>
  )
}

export default SearchInput
