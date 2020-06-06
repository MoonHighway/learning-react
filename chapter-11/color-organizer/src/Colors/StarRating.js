import React from "react";
import Star from "./Star";

const createArray = length => [...Array(length)];

export default function StarRating({
  total = 5,
  selected = 0,
  onChange = f => f
}) {
  return (
    <div className="star-rating">
      {createArray(total).map((n, i) => (
        <Star
          key={i}
          selected={selected > i}
          onSelect={() => onChange(i + 1)}
        />
      ))}
      <p>
        {selected} of {total} stars
      </p>
    </div>
  );
}
