import { TextField } from '@material-ui/core'
import React from 'react'

interface InputProps {
  name: string
  label: string
  value: string | number | null
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

const Input = ({ name, label, value, onChange }) => {
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
    />
  )
}

export default Input
