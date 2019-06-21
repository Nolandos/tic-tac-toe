import React from 'react';

import './Square.scss';

    function Square(props) {
      return (
        <button className="square-field" onClick={props.onClick}> 
          {props.value}
        </button>
      );
    }
  
  export default Square;