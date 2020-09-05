import React from 'react';
import { Paper, Grid } from './styles';
import './App.css';
import { Header } from './component/Header';
import { Left } from './component/Left';
import { Right } from './component/Right';

function App() {


  return (
    <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <Header />
      <Paper style={{width: '80%', justifyContent: 'center', alignItems: 'center'}}>
        <Grid container style={{marginBottom: '24px'}}>
          <Left />
          <Right />
        </Grid>
      </Paper>
    </div>
  );
}

export default App;
