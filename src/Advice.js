import React, { Component } from "react";
import advice from "./advice.jpeg"
class Advice extends Component {
  render() {
    return (
      <div>
          <h2>Advice !!!</h2>
          <img src={advice} height="20%" width="20%"/>
        
        
      </div>
    );
  }
}
 
export default Advice;