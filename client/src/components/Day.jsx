import React, { Component } from "react";
import ReactDOM from "react-dom";

function Day(props) {
  return (
    <tr>
      <td>{props.day}</td>
      <td>{props.row1}</td>
      <td>{props.row2}</td>
      <td>{props.row3}</td>
    </tr>
  );
}

export default Day;
