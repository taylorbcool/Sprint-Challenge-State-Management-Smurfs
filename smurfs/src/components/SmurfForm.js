import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { handleName, handleAge, handleHeight, handleSubmit } from '../actions/smurfActions';

const SmurfForm = props => {
    console.log(props)
    return (
        <form onSubmit={e => {
                e.preventDefault();
                props.handleSubmit(props.inputValues);
            }}>
            <label>
                Name:
                <input
                    type='text'
                    value={props.inputValues.name}
                    onChange={props.handleName}
                />
            </label>
            <label>
                Age:
                <input
                    type='number'
                    value={props.inputValues.age}
                    onChange={props.handleAge}
                />
            </label>
            <label>
                Height (in cm):
                <input
                    type='number'
                    value={props.inputValues.height}
                    onChange={props.handleHeight}
                />
            </label>
            <button>Add Smurf</button>
            {props.isPosting && 
            <>
                <p>Adding smurf...</p>
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                />
            </>
            }
        </form>
    );
};

const mapStateToProps = state => {
    return {
        inputValues: state.inputValues
    }
}

export default connect(
    mapStateToProps,
    { handleName, handleAge, handleHeight, handleSubmit }
)(SmurfForm)