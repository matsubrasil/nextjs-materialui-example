import React from 'react'
import { Grid } from '@material-ui/core'
import { useForm, Form } from './../components/UseForm'
import * as employeeService from './../services/employeeService'
import Controls from './../components/controls/Controls'

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
  const { values, handleInputChange, handleOnClick } = useForm(initialFValues)

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
            <Controls.Input
              name="mobile"
              label="Mobile"
              value={values.mobile}
              onChange={handleInputChange}
            />
            <Controls.Input
              name="city"
              label="City"
              value={values.city}
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
            <Controls.DatePickerControl
              name="hireDate"
              label="Hire Date Employee"
              value={values.hireDate}
              onChange={handleInputChange}
            />
            <Controls.CheckboxControl
              name="isPermanent"
              label="Permanent Employee"
              value={values.isPermanent}
              onChange={handleInputChange}
            />
            <div>
              <Controls.ButtonControl
                type="submit"
                text="Submit"
                size="large"
                variant="contained"
                color="primary"
                onClick={handleOnClick}
              />
              <Controls.ButtonControl
                text="Reset"
                color="default"
                size="large"
                variant="contained"
                onClick={handleOnClick}
              />
            </div>
          </Grid>
        </Grid>
      </Form>

      <pre>{JSON.stringify(values, null, 4)}</pre>
    </>
  )
}

export default EmployeeForm
