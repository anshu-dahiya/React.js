import React from "react";
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Four from "./Four";
import Five from "./Five";
import Six from "./Six";
import Seven from "./Seven";
import Eight from "./Eight";
import Nine from "./Nine";
import Ten from "./Ten";
import Eleven from "./Eleven";
import Twelve from "./Twelve";
import Thirteen from "./Thirteen";
import Fourteen from "./Fourteen";

export default function App(){

  const items = ['item 1','item 2','item 3','Another item ','Another item 2',]

  return(
    <div>
      {/* <One/> 
      <Two/>
      <Three/>
      <Four/>
      <Five/>
      <Six/>
      <Seven/>
      <Eight/>
      <Nine/>
      <Ten/>
      <Eleven/> */}
      {/* <Twelve/> */}
      {/* <Thirteen/> */}
      <Fourteen items={items}/>
    </div>
  )
}