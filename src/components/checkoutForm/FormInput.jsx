import React from 'react'
import { InputLabel, Grid, Input, Select } from '@material-ui/core'
import { useForm, Controller } from 'react-hook-form'
const FormInput = ({ name, label, required }) => {
  // const { control } = useFormContext()
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      checkbox: false,
    },
  })
  return (
    <Grid item xs={12} sm={6}>
      <label>{label}</label>
      <br />
      <Controller
        name={name}
        label={label}
        required={required}
        control={control}
        render={({ field }) => <Input {...field} />}
      />

      {/* <Controller
        as={TextField}
        fullWidth
        name={name}
        control={control}
        label={label}
        required={required}
      /> */}
    </Grid>
  )
}
export default FormInput
