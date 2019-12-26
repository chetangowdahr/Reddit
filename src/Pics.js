import React, { Component } from "react";
import pics from "./Pics.jpg"
class Pics extends Component {
  render() {
    return (
      <div>
         
        <h2>Pics !!!</h2>
        <img src={pics} height="20%" width="20%"/>

      </div>
    );
  }
}
 
export default Pics;