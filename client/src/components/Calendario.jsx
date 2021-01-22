import React, { Component } from "react";
import reactDom from "react-dom";
import "./Calendario.css";

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
      <table class="days">
        <tr>
          <h3 class="month">May</h3>
        </tr>
        <tr>
          <span role="img" aria-label="sheep"></span>
          <td></td>
          <button onClick={shoot}>🦁</button>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>10</td>
          <td>11</td>
          <td>12</td>
          <td>13</td>
          <td>14</td>
          <td>15</td>
          <td>16</td>
          <td>17</td>
          <td>18</td>
          <td>19</td>
          <td>20</td>
          <td>21</td>
          <td>22</td>
          <td>23</td>
          <td>24</td>
          <td>25</td>
          <td>26</td>
          <td>27</td>
          <td>28</td>
          <td>29</td>
          <td>30</td>
          <td>31</td>
        </tr>
        <tr>
          <td>Physical Activity</td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
        </tr>
        <tr>
          <td>Coding</td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
          <td class="task"></td>
        </tr>
      </table>
    </div>
  );
}

export default Calendario;
