import React from 'react'
import {StyledLanguageFilter, StyledLanguageTag } from '../../styles/components/home_style/LanguageFilterStyle'

const LanguageFilterBar = () => {
    const tag_list =
        ['JavaScript', 'Java', 'Python', 'C++', 'C#'];
    return <StyledLanguageFilter>
        {tag_list.map((tag, i) => {
            // TODO
            // key가 따로 없어서 index로 하기는 했으나
            // 추후에 바꾸어야 합니다
            return <StyledLanguageTag key={i}>
                {`${tag}`}
            </StyledLanguageTag>
      })}
  </StyledLanguageFilter>
}

export default React.memo(LanguageFilterBar)
