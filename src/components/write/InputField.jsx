import React from 'react'
import {
  StInput,
  StLabel,
  StTextarea,
} from '../../styles/components/write_style/InputFieldStyle'

const InputField = ({ id, name, value, onChange, label, isTitle = false }) => {
  return (
    <div>
      {isTitle ? (
        <>
          <StLabel htmlFor={id}>{label}</StLabel>
          <StInput
            id={id}
            type="text"
            name={name}
            value={value}
            onChange={onChange}
          />
        </>
      ) : (
        <>
          <StLabel htmlFor={id}>{label}</StLabel>
          <StTextarea
            id={id}
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            rows={id === 'code' ? 10 : 3}
          ></StTextarea>
        </>
      )}
    </div>
  )
}

export default InputField
