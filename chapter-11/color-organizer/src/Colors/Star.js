import React from "react";
import { FaStar } from "react-icons/fa";

export default function Star({ selected = false, onSelect = f => f }) {
  return <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />;
}
