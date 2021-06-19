import React from 'react'
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup
} from '@material-ui/core'

interface Item {
  id: string
  title: string
}

interface IRadioProps {
  label: string
  name: string
  value: string
  items: Item[]
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

const RadioGroupControl = ({
  label,
  name,
  value,
  items,
  onChange
}: IRadioProps) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <RadioGroup name={name} value={value} onChange={onChange} row>
        {items.map(item => (
          <FormControlLabel
            key={item.id}
            value={item.id}
            control={<Radio />}
            label={item.title}
          />
        ))}
      </RadioGroup>
    </FormControl>
  )
}

export default RadioGroupControl
