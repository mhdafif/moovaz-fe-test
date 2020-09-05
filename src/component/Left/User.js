import React from 'react'
import { Grid, GridItem, Button, Divider, FormGroup } from '../../styles';
import { FaUserAlt, FaFacebook, FaGoogle } from 'react-icons/fa';

export const User = () => {
  return (
    <React.Fragment>
      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '16px', marginRight: '24px'}}>
        <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <FaUserAlt style={{fontSize: '24px', marginRight: '4px'}} />
          Your data
        </span>
        <Button style={{padding: '0 4px'}}>Already Registered?</Button>
      </div>
      <Divider middle />
      <div>
        <p><i>Login using your social networks</i></p>
      </div>
      <div style={{marginBottom: '16px'}}>
        <Button>
          <span style={{width: '100%', display: 'inherit', alignItems: 'inherit', justifyContent: 'inherit'}}>
            <FaFacebook style={{marginTop: '-2px', marginRight: '8px'}} /> Facebook
          </span>
        </Button>
        <Button danger style={{marginLeft: '16px'}}>
          <span style={{width: '100%', display: 'inherit', alignItems: 'inherit', justifyContent: 'inherit'}}>
            <FaGoogle style={{marginTop: '-2px', marginRight: '8px'}} /> Google
          </span>
        </Button>
      </div>
      <Divider middle />
      <Grid container spacing={6} style={{marginTop: '16px', marginBottom: '16px'}}>
        <GridItem sm={6}>
          <FormGroup fullwidth>
            <label>First name*</label>
            <input className={`form-control`} name="firstname" placeholder="firstname" />
          </FormGroup>
        </GridItem>
        <GridItem sm={6}>
          <FormGroup fullwidth>
            <label>Last name*</label>
            <input className={`form-control`} name="lastname" placeholder="lastname" />
          </FormGroup>
        </GridItem>
        <GridItem sm={6}>
          <FormGroup fullwidth>
            <label>Email*</label>
            <input className={`form-control`} name="email" placeholder="email" />
          </FormGroup>
        </GridItem>
        <GridItem sm={6}>
          <FormGroup fullwidth>
            <label>Confirm email*</label>
            <input className={`form-control`} name="confirmemail" placeholder="confirm email" />
          </FormGroup>
        </GridItem>
        <Grid item sm={12}>
          <input type="checkbox" />
          <label style={{marginLeft: '8px'}}>Creact an account and enjoy the benefits of a registered customer</label>
        </Grid>
        <Grid item sm={12}>
          <input type="checkbox" />
          <label style={{marginLeft: '8px'}}>I have read and accept the Privacy Policy. (read)</label>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
