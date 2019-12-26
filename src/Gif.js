import React, { Component } from "react";
import submit from "./submit.gif"
class Gif extends Component {
  render() {
    return (
      <div>
        <h2>Gif !!!</h2>
         <img src={submit} height="20%" width="20%"/>
        

      </div>
    );
  }
}
 
export default Gif;