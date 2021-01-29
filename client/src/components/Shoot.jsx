import React from "react";

function Shoot() {
  function shoot() {
    alert("Great Shot!");
  }
  return (
    <div>
      <button onClick={shoot}>Take the shot!</button>
      {/* <button onClick={shoot}>Take the shot!</button> */}
    </div>
  );
}

export default Shoot;
