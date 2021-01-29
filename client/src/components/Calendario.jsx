import React, { Component, useState } from "react";
import Fetch from "react-fetch";
import "./Calendario.css";
import Table from "./Table";
import MyComponent from "./APIreqReact";

let mese = "";

switch (new Date().getMonth()) {
  case 0:
    mese = "January";
    break;
  case 1:
    mese = "February";
    break;
  case 2:
    mese = "March";
    break;
  case 3:
    mese = "April";
    break;
  case 4:
    mese = "May";
    break;
  case 5:
    mese = "June";
    break;
  case 6:
    mese = "July";
    break;
  case 7:
    mese = "August";
    break;
  case 8:
    mese = "September";
    break;
  case 9:
    mese = "October";
    break;
  case 10:
    mese = "November";
    break;
  case 11:
    mese = "December";
    break;
}
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

class TestComponent extends React.Component {
  render() {
    console.log(this.props);
    return <div />;
  }
}

function Calendario() {
  function shoot() {
    alert("You have struck the day!");
  }
  const [headingText, setHeadingText] = useState(mese);
  return (
    //fetch('/api/customers').then(console.log('/api/customers'));
    //   fetch('http://example.com/movies.json')
    // .then(response => response.json())
    // .then(data => console.log(data));
    <div>
      <h1>{headingText}</h1>
      <MyComponent />
      <Table />
    </div>
  );
}

export default Calendario;
