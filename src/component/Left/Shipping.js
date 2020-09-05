import React from 'react'
import { Grid, GridItem, Divider, FormGroup } from '../../styles';

export const Shipping = () => {
  return (
    <div>
      <h3>Shipping Address</h3>
      <Divider middle />
      <Grid container spacing={6} style={{marginTop: '16px'}}>
        <GridItem sm={12}>
          <FormGroup fullwidth>
            <label>Address*</label>
            <input className={`form-control`} name="address" placeholder="address" />
          </FormGroup>
        </GridItem>
        <GridItem sm={6} style={{paddingRight: 0}}>
          <FormGroup fullwidth>
            <label>Country*</label>
            <select className={`form-control`} name="country" >
              <option>None</option>
              <option>Indonesia</option>
              <option>Singapore</option>
              <option>United State</option>
            </select>
          </FormGroup>
        </GridItem>
        <GridItem sm={6} style={{paddingRight: 0}}>
          <FormGroup fullwidth>
            <label>State*</label>
            <select className={`form-control`} name="country" >
              <option>None</option>
              <option>Central Java</option>
              <option>East Java</option>
              <option>West Java</option>
            </select>
          </FormGroup>
        </GridItem>
        <GridItem sm={6}>
          <FormGroup fullwidth>
            <label>Zip/Postal Code*</label>
            <input className={`form-control`} name="zip" placeholder="zip" />
          </FormGroup>
        </GridItem>
        <GridItem sm={6}>
          <FormGroup fullwidth>
            <label>City*</label>
            <input className={`form-control`} name="city" placeholder="city" />
          </FormGroup>
        </GridItem>
        <GridItem sm={6}>
          <FormGroup fullwidth>
            <label>Mobile phone*</label>
            <input className={`form-control`} name="mobile" placeholder="mobile" />
          </FormGroup>
        </GridItem>
      </Grid>
    </div>
  )
}
