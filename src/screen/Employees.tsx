import React from 'react'
import EmployeeForm from './EmployeeForm'
import PageHeader from '../components/PageHeader'
import { PeopleOutlineTwoTone } from '@material-ui/icons'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'

const useStyles = makeStyles(theme =>
  createStyles({
    pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3)
    }
  })
)
const Employees = () => {
  const classes = useStyles()

  return (
    <>
      <PageHeader
        title="New Employee"
        subTitle="Form design with validation"
        icon={<PeopleOutlineTwoTone fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <EmployeeForm />
      </Paper>
    </>
  )
}

export default Employees
