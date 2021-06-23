import React from 'react'
import { Star } from './Star'

// create specific number of stars
const createArray = (length) => [...Array(length)];

export default function StarRating({totalStars = 5}) {
  return createArray(totalStars).map((star, i) => <Star key={i}/>)
}
