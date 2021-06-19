import React from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'

interface IDepartment {
  id: number
  title: string
}

interface ISelectProps {
  name: string
  label: string
  value: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  options: IDepartment[]
}

const SelectControl = ({
  name,
  label,
  value,
  onChange,
  options
}: ISelectProps) => {
  return (
    <FormControl variant="outlined">
      <InputLabel>{label}</InputLabel>
      <Select label={label} name={name} value={value} onChange={onChange}>
        <MenuItem value="">None</MenuItem>
        {options.map(option => (
          <MenuItem key={option.id} value={option.id}>
            {option.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default SelectControl
