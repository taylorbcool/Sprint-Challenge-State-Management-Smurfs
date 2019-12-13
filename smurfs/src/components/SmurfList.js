import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner'
import Smurf from './Smurf'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const SmurfList = props => {

    return (
        <div className='flex'>
            {props.isFetching && (
                <>
                <h1>Fetching smurfs...</h1>
                <br />
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                />
                </>
            )}
            {props.smurfData && 
                props.smurfData.map(smurf => (
                    <Smurf key={smurf.id} smurf={smurf} />
                ))
            }
        </div>
  );
};

const mapStateToProps = state => {
  return {
        smurfData: state.smurfData,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
  mapStateToProps,
  {}
)(SmurfList);