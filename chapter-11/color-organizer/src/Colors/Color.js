import React, { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import StarRating from "./StarRating";
import { useColors } from "./";

const Trash = memo(FaTrash);
const Rating = memo(StarRating);

export default memo(
  function Color({
    id,
    title,
    color,
    rating = 0
  }) {
    const {
      rateColor,
      removeColor
    } = useColors();

    const rate = useCallback(
      rating => rateColor(id, rating),
      []
    );

    let navigate = useNavigate();

    return (
      <section
        className="color"
        onClick={() => navigate(`/${id}`)}
      >
        <h1>{title}</h1>
        <button onClick={() => removeColor(id)}>
          <Trash color="red" />
        </button>
        <div
          style={{
            height: 50,
            backgroundColor: color
          }}
        />
        <Rating
          selected={rating}
          onChange={rate}
        />
      </section>
    );
  },
  (prevProps, nextProps) => {
    console.log(
      prevProps.rating,
      nextProps.rating
    );
    return prevProps.rating === nextProps.rating;
  }
);
