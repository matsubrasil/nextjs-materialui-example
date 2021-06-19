import React from 'react'
import { Grid } from '@material-ui/core'
import { useForm, Form } from './../components/UseForm'
import Controls from './../components/controls/Controls'
import * as employeeService from './../services/employeeService'

const initialFValues = {
  id: 0,
  fullName: '',
  email: '',
  mobile: '',
  city: '',
  gender: 'male',
  departmentId: '',
  hireDate: new Date(),
  isPermanent: false
}

const genderItems = [
  { id: 'male', title: 'male' },
  { id: 'female', title: 'female' },
  { id: 'other', title: 'other' }
]

const EmployeeForm = () => {
  const { values, handleInputChange } = useForm(initialFValues)

  return (
    <>
      <Form>
        <Grid container>
          <Grid item xs={6}>
            <Controls.Input
              name="fullName"
              label="Full Name"
              value={values.fullName}
              onChange={handleInputChange}
            />
            <Controls.Input
              name="email"
              label="Email"
              value={values.email}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <Controls.RadioGroupControl
              label="Gender"
              name="gender"
              items={genderItems}
              value={values.gender}
              onChange={handleInputChange}
            />
            <Controls.SelectControl
              name="departmentId"
              label="Department"
              value={values.departmentId}
              onChange={handleInputChange}
              options={employeeService.getDepartmentCollection()}
            />
          </Grid>
        </Grid>
      </Form>

      <pre>{JSON.stringify(values, null, 4)}</pre>
    </>
  )
}

export default EmployeeForm
