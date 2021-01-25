import React, { Component } from "react";
import { useTable } from "react-table";
import Day from "./Day";

const days = [
  { id: "date", uno: "1", due: "2" },
  { id: "riordino", uno: "🦁", due: "🦁" },
  { id: "yoga", uno: "🧘🏼‍♂️", due: "🧘🏼‍♂️" },
  { id: "coding", uno: "👨‍💻", due: "👨‍💻" },
];

function createDay(days) {
  return (
    <Day
      key={days.id}
      uno={days.uno}
      due={days.due}
      // 2={days.2}
      // 3={days.3}
    />
  );
}

function Table() {
  return <div>{days.map(createDay)}</div>;
}

export default Table;
