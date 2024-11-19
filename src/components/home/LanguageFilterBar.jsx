import React from 'react'
import {
  StyledLanguageFilter,
  StyledLanguageTag,
} from '../../styles/components/home_style/LanguageFilterStyle'
import { useDispatch, useSelector } from 'react-redux'
import { removeTag, selectTag } from '../../redux/slices/languageFilterSlice'

const LanguageFilterBar = () => {
  const dispatch = useDispatch()
  const languageState = useSelector((state) => state.languageFilter)
  const tag_list = Object.keys(languageState)

  const tagButtonHandler = (tag) => {
    if (languageState[tag]) {
      dispatch(removeTag(tag))
    } else {
      dispatch(selectTag(tag))
    }
	}
	
  return (
    <StyledLanguageFilter>
      {tag_list.map((tag) => {
        const isActive = languageState[tag]
        return (
          <StyledLanguageTag
            key={tag}
            onClick={() => tagButtonHandler(tag)}
            className={isActive ? 'active' : ''}
          >
            {`${tag}`}
          </StyledLanguageTag>
        )
      })}
    </StyledLanguageFilter>
  )
}

export default React.memo(LanguageFilterBar)
