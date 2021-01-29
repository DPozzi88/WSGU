// import React from "react";
// import { render } from "react-dom";

// function MyComponent() {
//   const url = "http://localhost:5000/api/customers";
//   const response = fetch(url);
//   const data = response.json();
//   console.log(data);

//   return <div>{this.state.loading}</div>;
// }

// export default MyComponent;

// import React, { Component, useState, useEffect } from "react";

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//       isLoaded: false,
//       items: [],
//     };
//   }

//   async componentDidMount() {
//     await fetch("http://localhost:5000/api/customers")
//       .then((res) => res.json())
//       .then(
//         (result) => {
//           this.setState({
//             isLoaded: true,
//             items: result.items,
//           });
//         },
//         // Note: it's important to handle errors here
//         // instead of a catch() block so that we don't swallow
//         // exceptions from actual bugs in components.
//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error,
//           });
//         }
//       );
//   }

//   render() {
//     const { error, isLoaded, items } = this.state;
//     if (error) {
//       return <div>Error: {error.message}</div>;
//     } else if (!isLoaded) {
//       return <div>Loading...</div>;
//     } else {
//       return (
//         <ul>
//           {items.map((item) => (
//             <li key={item.id}>
//               {item.name} {item.price}
//             </li>
//           ))}
//         </ul>
//       );
//     }
//   }
// }

//

// function MyComponent() {
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [items, setItems] = useState([]);

//   // Note: the empty deps array [] means
//   // this useEffect will run once
//   // similar to componentDidMount()
//   useEffect(() => {
//     fetch("/api/customers")
//       .then((res) => res.json())
//       .then(
//         (result) => {
//           setIsLoaded(true);
//           setItems(result);
//         },
//         // Note: it's important to handle errors here
//         // instead of a catch() block so that we don't swallow
//         // exceptions from actual bugs in components.
//         (error) => {
//           setIsLoaded(true);
//           setError(error);
//           console.log(error);
//         }
//       );
//   }, []);

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   } else if (!isLoaded) {
//     return <div>Loading...</div>;
//   } else {
//     return <h1> foundStreaks</h1>;
//   }
// }

// export default MyComponent;
