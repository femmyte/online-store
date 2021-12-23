import React, { useState, useEffect } from 'react'
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
  FormField,
} from '@material-ui/core'
import { commerce } from '../../lib/commerce'
import FormInput from './FormInput'
import { useForm, FormProvider } from 'react-hook-form'
import { Link } from 'react-router-dom'
const AddressForm = ({ checkoutToken, next }) => {
  const [shippingCountries, setShippingCountries] = useState([])
  const [shippingCountry, setShippingCountry] = useState('')
  const [shippingSubdivisions, setShippingSubdivisions] = useState([])
  const [shippingSubdivision, setShippingSubdivision] = useState('')
  const [shippingOptions, setShippingOptions] = useState([])
  const [shippingOption, setShippingOption] = useState('')

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) =>
    next({ ...data, shippingCountry, shippingSubdivision, shippingOption })
  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListCountries(
      checkoutTokenId
    )
    // the countries response will return a list of token object with a key of short names and the countries as value, so before passing it we need to get the key of the object first by using Object.key method and then get the first value of each keys
    setShippingCountries(countries)
    setShippingCountry(Object.keys(countries)[0])
  }
  const countries = Object.entries(shippingCountries).map(([name, code]) => ({
    id: name,
    label: code,
  }))
  const fetchSubDivision = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    )
    setShippingSubdivisions(subdivisions)
    setShippingSubdivision(Object.keys(subdivisions)[0])
  }
  const subdivisions = Object.entries(shippingSubdivisions).map(
    ([name, code]) => ({
      id: name,
      label: code,
    })
  )
  const options = shippingOptions.map((option) => ({
    id: option.id,
    label: `${option.description} - (${option.price.formatted_with_symbol})`,
  }))
  const fetchShippingOptions = async (
    checkoutTokenId,
    country,
    region = null
  ) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      {
        country,
        region,
      }
    )
    setShippingOptions(options)
    setShippingOption(options[0].id)
  }
  useEffect(() => {
    fetchShippingCountries(checkoutToken.id)
  }, [])
  useEffect(() => {
    if (shippingCountry) fetchSubDivision(shippingCountry)
  }, [shippingCountry])
  useEffect(() => {
    if (shippingSubdivision)
      fetchShippingOptions(
        checkoutToken.id,
        shippingCountry,
        shippingSubdivision
      )
  }, [shippingSubdivision])
  return (
    <>
      <Typography variant='h6' gutterBottom>
        Shipping Address
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <FormInput required name='firstName' label='First Name' fullWidth />
          <FormInput required name='lastName' label='Last Name' />
          <FormInput required name='address1' label='Address' />
          <FormInput required name='email' label='Email' />
          <FormInput required name='city' label='City' />
          <FormInput required name='zip' label='ZIP / Postal Code' />
          <Grid item xs={12} sm={6}>
            <InputLabel>Shipping Country</InputLabel>
            <Select
              value={shippingCountry}
              fullWidth
              onChange={(e) => setShippingCountry(e.target.value)}
            >
              {countries.map((country) => (
                <MenuItem key={country.id} value={country.id}>
                  {country.label}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel>Shipping Subdivisions</InputLabel>
            <Select
              value={shippingSubdivision}
              fullWidth
              onChange={(e) => setShippingSubdivision(e.target.value)}
            >
              {subdivisions.map((subdivision) => (
                <MenuItem key={subdivision.id} value={subdivision.id}>
                  {subdivision.label}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel>Shipping Options</InputLabel>
            <Select
              value={shippingOption}
              fullWidth
              onChange={(e) => setShippingOption(e.target.value)}
            >
              {options.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button component={Link} to='/cart' variant='outlined'>
            Back to cart
          </Button>
          <Button type='submit' variant='contained' color='primary'>
            Next
          </Button>
        </div>
      </form>
      {/* </FormProvider> */}
    </>
  )
}

export default AddressForm
