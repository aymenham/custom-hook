import { Link } from "react-router-dom";
import { CardType } from "./List";

const Card = ({ id, name, image }: CardType) => {
  return (
    <Link to={"/list/" + id}>
      <div>
        <div>{name}</div>
        <img src={image} alt="" />
      </div>
    </Link>
  );
};

export default Card;
