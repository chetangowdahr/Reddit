import React, { Component } from "react";
import photoshop from "./photoshop.jpg"
class Photoshop extends Component {
  render() {
    return (
      <div>
         
        <h2>Photoshop Battle</h2>
        <img src={photoshop} height="20%" width="20%"/>
      </div>
    );
  }
}
 
export default Photoshop;