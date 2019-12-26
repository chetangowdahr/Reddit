import React, { Component } from "react";
import cat from './cat.jpg';
class Cat extends Component {
  render() {
    return (
      <div>
          <h2>Cat!!!</h2>
         <img src={cat} height="20%" width="20%"/>
      
        <p>The cat is either a house cat or a farm cat, which are pets, or a feral cat, 
          which ranges freely and avoids human contact.House cats are valued by humans for companionship. 
           About 60 cat breeds are recognized by various cat registries.</p>
      </div>
    );
  }
}
 
export default Cat;