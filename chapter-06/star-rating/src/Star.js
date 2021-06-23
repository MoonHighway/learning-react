import { FaStar } from "react-icons/fa";

export const Star = ({selected = false}) => (
  <FaStar color={selected ? 'red': 'grey'} />
)
