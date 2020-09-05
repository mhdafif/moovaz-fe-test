import React from 'react'
import { Grid, GridItem, Button, FormGroup } from '../../styles';
import { FaCheck, FaTrashAlt, FaShoppingCart, FaArrowLeft } from 'react-icons/fa';

export const Summary = () => {
  const [number, setNumber] = React.useState(0);
  
  return (
    <React.Fragment>
      <GridItem sm={12} style={{marginTop: '24px'}}>
        <div style={{display: 'flex', border: '1px solid #828282', backgroundColor: '#e0e0e0', padding: '10px'}}>
          <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <FaCheck style={{fontSize: '28px', marginRight: '8px'}} />
            Order Summary
          </span>
        </div>
      </GridItem>
      <GridItem sm={12}>
        <Grid container>
          <GridItem sm={6}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <span style={{marginLeft: '55px'}}>
                <p style={{textDecoration: 'underline'}}>Description</p>
              </span>
              <div style={{marginTop: '12px', display: 'flex'}}>
                <img src={process.env.PUBLIC_URL + '/images/coffee-1900194_960_720.jpg'} alt="cc" style={{height: '50px', width: '50px', marginRight: '5px'}} /> 
                <small style={{color: '#42b9d4'}}>Virtual product</small>
              </div>
            </div>
          </GridItem>
          <GridItem sm={6}>
            <Grid container style={{textAlign: 'end'}}>
              <GridItem sm={3}>
                <span>
                  <p style={{textDecoration: 'underline'}}>Unit price</p>
                </span>
                <div style={{marginTop: '12px'}}>
                  <p>$ 25.00</p>
                </div>
              </GridItem>
              <GridItem sm={3}>
                <span>
                  <p style={{textDecoration: 'underline'}}>Qty</p>
                </span>
                <div style={{marginTop: '12px', display: 'flex', position: 'relative', justifyContent: 'flex-end'}}>
                  <Button style={{padding: 0, minWidth: '30px', backgroundColor: 'transparent', color: 'black', border: '1px solid #d8d8d8'}} onClick={() => setNumber(number-1)} >-</Button>
                  <input value={number} style={{width: '40px', textAlign: 'center'}} />
                  <Button style={{padding: 0, minWidth: '30px', backgroundColor: 'transparent', color: 'black', border: '1px solid #d8d8d8'}} onClick={() => setNumber(number+1)} >+</Button>
                  <FaTrashAlt style={{fontSize: '24px', position: 'absolute', left: '100%', cursor: 'pointer'}} />
                </div>
              </GridItem>
              <GridItem sm={6}>
                <span>
                  <p style={{textDecoration: 'underline'}}>Total</p>
                </span>
                <div style={{marginTop: '12px'}}>
                  <p>$ 25.00</p>
                </div>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem sm={6}></GridItem>
          <GridItem sm={6}>
            <Grid container style={{textAlign: 'end'}}>
              <GridItem sm={8}>
                <p>Total products (tax incl.):</p>
                <p>Total shipping:</p>
                <p>Total (tax excl.):</p>
                <p>Total  tax:</p>
                <p>TOTAL AMOUNT OF YOUR PURCHASE:</p>
              </GridItem>
              <GridItem sm={4}>
                <p>$ 25.00</p>
                <p>Free shipping</p>
                <p>$ 20.66</p>
                <p>$ 4.43</p>
                <p>$ 25.00</p>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem sm={6}>
            <div style={{display: 'flex'}}>
              <p style={{alignSelf: 'center', marginRight: '24px'}}><b>Voucher</b></p>
              <input style={{marginRight: '8px'}} />
              <Button>Add</Button>
            </div>
          </GridItem>
          <GridItem sm={12} style={{marginTop: '24px'}}>
            <p>if you would like to add a comment about your order, please write it below</p>
            <FormGroup fullwidth>
              <textarea className={`form-control`} style={{padding: 0}} rows={4} />
            </FormGroup>
          </GridItem>
          <GridItem sm={12} style={{marginTop: '8px'}}>
            <input type="checkbox" />
            <label style={{marginLeft: '8px'}}>I agree to the terms of service and adhere to them unconditionally. (read)</label>
          </GridItem>
          <GridItem sm={12}>
            <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '24px'}}>
              <Button style={{height: '100%', padding: '4px', backgroundColor: 'transparent', color: 'black', border: '1px solid #d8d8d8'}}>
                <FaArrowLeft style={{marginRight: '6px'}} />
                Continue shopping
              </Button>
              <Button style={{padding: '8px'}}>
                <FaShoppingCart style={{marginRight: '6px'}} />
                Checkout
              </Button>
            </div>
          </GridItem>
        </Grid>
      </GridItem>
    </React.Fragment>
  )
};
