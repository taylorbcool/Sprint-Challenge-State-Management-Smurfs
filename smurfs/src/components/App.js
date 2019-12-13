import React, { useEffect } from "react";
import { connect } from 'react-redux';
import SmurfList from './SmurfList'
import { getSmurfs } from '../actions/smurfActions'
import "./App.css";


const App = props => {

  useEffect(() => {
    props.getSmurfs()
  }, []);

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <SmurfList />
    </div>
  );
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);