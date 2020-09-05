import React from 'react'
import { Grid, GridItem, Divider } from '../styles';
import { FaCreditCard } from 'react-icons/fa';
import { Summary } from './Right/Summary';
import { Payment } from './Right/Payment';

export const Right = () => {


  return (
    <GridItem sm={12} md={8} lg={8}>
    <div style={{display: 'flex', marginBottom: '16px'}}>
      <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <FaCreditCard style={{fontSize: '28px', marginRight: '4px'}} />
        Payment Method
      </span>
    </div>
    <Divider middle />
    <Grid container style={{marginTop: '12px'}}>
      <Payment />
      <Summary />
    </Grid>
  </GridItem>

  )
}
