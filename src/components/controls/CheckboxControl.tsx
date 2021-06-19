import React from 'react'
import { Checkbox, FormControlLabel } from '@material-ui/core'

interface ICheckboxProps {
  name: string
  label: string
  value: boolean
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

const convertDefaultEventParams = (name: string, value: boolean): any => ({
  target: {
    name,
    value
  }
})

const CheckboxControl = ({ name, label, value, onChange }: ICheckboxProps) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          name={name}
          color="primary"
          checked={value}
          onChange={e =>
            onChange(convertDefaultEventParams(name, e.target.checked))
          }
        />
      }
      label={label}
    />
  )
}

export default CheckboxControl
