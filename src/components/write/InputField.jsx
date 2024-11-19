import React from 'react'

const InputField = ({ id, name, value, onChange, label }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="text"
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  )
}

export default InputField
