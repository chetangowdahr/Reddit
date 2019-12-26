import React, { Component } from "react";
 import {
    Route,
    NavLink,
    HashRouter,
    
  } from "react-router-dom";
  import Cat from "./Cat";
  import Gif from "./Gif";
  import Alternative from "./Alternative";
  import Advice from "./Advice";
  import Pics from "./Pics";
  import Photoshop from "./Photoshop";
  import "./index.css";
  import Like from "./Like"
class Main extends Component {
  render() {
    return (
    <HashRouter>
      <div>
      <p className="p">Reddit<br></br></p>
      <p className="p1">The front-page of the Internet</p>
      <hr></hr>
      </div>
        <div text-align="left"> 
            &nbsp;&#8594;<NavLink to="/Cat">Cat</NavLink><br></br><br></br>
           <Route component={Like}></Route>
            <Route path="/Cat" component={Cat}/><br></br>
           &#8594; <NavLink to="/Gif">Gif</NavLink><br></br><br></br>
            <Route component={Like}></Route>
            <Route path="/Gif" component={Gif}/><br></br>
            &nbsp;&nbsp;&#8594; <NavLink to="/Alternative">Alternative</NavLink><br></br><br></br>
            <Route component={Like}></Route>
            <Route path="/Alternative" component={Alternative}/><br></br>
             &nbsp;&#8594;<NavLink to="/Advice">Advice animals</NavLink><br></br><br></br>
           <Route component={Like}></Route>
            <Route path="/Advice" component={Advice}/><br></br>
            &nbsp;&#8594;<NavLink to="/Pics">Pics</NavLink><br></br><br></br>
           <Route component={Like}></Route>
            <Route path="/Pics" component={Pics}/><br></br>
              &nbsp;&#8594;<NavLink to="/Photoshop">Photoshop battle</NavLink><br></br><br></br>
           <Route component={Like}></Route>
            <Route path="/Photoshop" component={Photoshop}/><br></br>
       </div>

</HashRouter>
    );
  }
}
 
export default Main;