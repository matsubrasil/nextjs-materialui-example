import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      '& .MuiFormControl-root': {
        width: '80%',
        margin: theme.spacing(1)
      }
    }
  })
)

interface IValuesProps {
  id: number
  fullName: string
  email: string
  mobile: string
  city: string
  gender: string
  departmentId: string
  hireDate: Date
  isPermanent: boolean
}

interface IOutput {
  values: IValuesProps
  // setValues: React.Dispatch<React.SetStateAction<IValuesProps>>
  handleInputChange: React.ChangeEventHandler<HTMLInputElement>
}

export const useForm = (initialFValues: IValuesProps): IOutput => {
  const [values, setValues] = React.useState<IValuesProps>(initialFValues)
  // typing on LEFT hand side of =
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [(event.target as HTMLInputElement).name]: (
        event.target as HTMLInputElement
      ).value
    })
  }

  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [(event.target as HTMLInputElement).name]: (
        event.target as HTMLInputElement
      ).value
    })
  }

  return {
    values,
    // setValues,
    handleInputChange
  }
}

interface IFormProps {
  children: JSX.Element
}

export const Form = ({ children }: IFormProps) => {
  const classes = useStyles()
  return (
    <form className={classes.root} autoComplete="off">
      {children}
    </form>
  )
}
