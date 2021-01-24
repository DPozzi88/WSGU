import React, { Component } from "react";
import ReactDOM from "react-dom";

function Day(props) {
  return (
    <td>
      <tr>{props.day}</tr>
      <tr>{props.row1}</tr>
      <tr>{props.row2}</tr>
      <tr>{props.row3}</tr>
    </td>
  );
}

export default Day;
