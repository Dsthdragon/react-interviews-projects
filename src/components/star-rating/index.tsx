import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './style.css'
interface Props {
  noOfStars: number;
}
export default function StarRating({ noOfStars = 5 }: Props) {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  function handleClick(getCurrentIndex: number): void {
    setRating(getCurrentIndex);
  }

  function handleMouseLeave(): void {
    setHover(rating);
  }
  function handleMouseEnter(getCurrentIndex: number): void {
    setHover(getCurrentIndex);
  }
  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? 'active': 'inactive'}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
}
