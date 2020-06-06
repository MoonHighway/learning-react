import React from "react";
import { FaStar } from "react-icons/fa";

export default function Star({ selected = false }) {
  return (
    <>
      <h1>Great Star</h1>
      <FaStar id="star" color={selected ? "red" : "grey"} />
    </>
  );
}
