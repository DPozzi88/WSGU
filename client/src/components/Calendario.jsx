import React, { Component } from "react";
import reactDom from "react-dom";
import "./Calendario.css";
import Table from "./Table";

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: [],
    };
  }
  componentDidMount() {
    fetch("/api/customers")
      .then((res) => res.json())
      .then((customers) =>
        this.setState({ customers }, () =>
          console.log("Customers fetched..", customers)
        )
      );
  }
  render() {
    return (
      <div>
        <h2>Customers</h2>
        <ul>
          {this.state.customers.map((customer) => (
            <li key={customer.id}>
              {customer.firstName} {customer.lastName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function Calendario() {
  function shoot() {
    alert("You have struck the day!");
  }
  return (
    <div>
      <h1>Winning Streak</h1>
      <Table />
    </div>
  );
}

export default Calendario;
