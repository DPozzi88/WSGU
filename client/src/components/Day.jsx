import React, { Component } from "react";
import ReactDOM from "react-dom";

const days = ["1", "2", "3", "4", "5", "6"];
const riordino = ["🦁", "🦁", "🦁", "🦁", "🦁", "🦁"];
const yoga = ["🧘🏼‍♂️", "🧘🏼‍♂️", "🧘🏼‍♂️", "🧘🏼‍♂️", "🧘🏼‍♂️", "🧘🏼‍♂️"];
const coding = ["👨‍💻", "👨‍💻", "👨‍💻", "👨‍💻", "👨‍💻", "👨‍💻"];

function Day(props) {
  return (
    <div>
      <table>
        <tr>
          <td>{props.uno}</td>
          <td>
            <button>{props.uno}</button>
          </td>
          <td>
            <button>{props.due}</button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Day;
