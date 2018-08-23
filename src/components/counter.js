import React, {Component} from 'react';
import Button from './button';
import Result from './result';

export default (props) => (
  <div className="container">
    <div className="row justify-content-center mt-5">
      <div className="card text-center border-light">
        <div className="card-body">
          <Result output={props.count}/>
          <div className="btn-group" role="group" aria-label="counter button">
            <Button label="Increment" onClickCb={props.handleIncrement}/>
            <Button label="Increment Async" onClickCb={props.handleIncrementAsync}/>
            <Button label="Decrement" onClickCb={props.handleDecrement}/>
          </div>
        </div>
      </div>
    </div>
  </div>
);

