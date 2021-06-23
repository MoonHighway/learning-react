import React, {useState} from 'react'
import { Star } from './Star'

// create specific number of stars
const createArray = (length) => [...Array(length)];

export default function StarRating({totalStars = 5}) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
  <>
  {createArray(totalStars).map((star, i) => <Star selected={selectedStars > i} onSelect={() => setSelectedStars( i + 1)} key={i}/>)}
  <p>{selectedStars} of {totalStars} stars</p>
  </>
)}
