import React, { useState } from "react";

function Day(props) {
  function handleClick() {
    alert(props.key);
  }

  return (
    <div>
      <button onClick={handleClick}>{props.uno}</button>
      <button onClick={handleClick}>{props.due}</button>
    </div>
  );
}

export { Day };
