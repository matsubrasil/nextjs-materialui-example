import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

interface IDatePickerProps {
  name: string
  label: string
  value: Date
  onChange: any
}

const convertDefaultEventParams = (name: string, value: Date): any => ({
  target: {
    name,
    value
  }
})

const DatePickerControl = ({
  name,
  label,
  value,
  onChange
}: IDatePickerProps) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        //disableToolbar
        // variant="inline"
        inputVariant="outlined"
        label={label}
        format="dd/MM/yyyy"
        name={name}
        value={value}
        onChange={date => onChange(convertDefaultEventParams(name, date))}
      />
    </MuiPickersUtilsProvider>
  )
}

export default DatePickerControl
