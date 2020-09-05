import React from 'react'
import { GridItem } from '../styles';
import { User } from './Left/User';
import { Shipping } from './Left/Shipping';

export const Left = () => {
  return (
    <GridItem sm={12} md={4} lg={4} style={{marginBottom: '32px'}}>
      <User />
      <Shipping />
    </GridItem>
  )
}
