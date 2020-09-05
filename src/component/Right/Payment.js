import React from 'react'
import { Grid, GridItem } from '../../styles';

export const Payment = () => {
  return (
    <GridItem sm={12}>
      <Grid container>
        <GridItem sm={6} style={{display: 'inherit', alignItems: 'center'}}>
          <input type="radio" style={{marginRight: '50px'}} />
          <img src={process.env.PUBLIC_URL + '/images/PayPal.png'} alt="paypal" style={{height: '48px'}} /> 
        </GridItem>
        <GridItem sm={6} style={{display: 'inherit', alignItems: 'center'}}>
          <label>Paypal</label>
        </GridItem>
        <GridItem sm={6} style={{display: 'inherit', alignItems: 'center'}}>
          <input type="radio" style={{marginRight: '50px'}} />
          <img src={process.env.PUBLIC_URL + '/images/cc.png'} alt="cc" style={{height: '48px'}} /> 
        </GridItem>
        <GridItem sm={6} style={{display: 'inherit', alignItems: 'center'}}>
          <label>Credit Card</label>
        </GridItem>
      </Grid>
    </GridItem>
  )
}
