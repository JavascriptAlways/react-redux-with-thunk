import React from 'react';
import { connect } from 'react-redux';
import { nameDispatch } from './actions/nameDispatch';

function App(props) {
  console.log(props);
  return (
    <div className="App">
      My name is {props.myname}
      <button onClick={() => props.changeName()}>Change Name</button>
    </div>
  );
}

const mapStateToProps = (state) => 
{
  return {
    myname:state.name
  }
}

const mapDispatchToProps = (dispatch) => 
{
  return {
      changeName : () => {dispatch(nameDispatch())}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
