import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios";
import Card from "../Components/List/Card";
import { CardType } from "../Components/List/List";
import { useAxiosFetch } from "../hooks/useAxiosFetch";

const Detail = () => {
  const { id } = useParams();
  /*  const { cards, error, loading } = useAxiosFetch<CardType>("/character/" + id); */

  const [cards, setCards] = useState<CardType>({ id: 0, image: "", name: "" });

  const getData = async () => {
    axios
      .get("/character/" + id)
      .then((result) => {
        setCards(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="detail">
      <h1>{(cards as CardType)?.name}</h1>
      <img src={(cards as CardType)?.image} alt="" />
      <h3>{(cards as CardType)?.status}</h3>
    </div>
  );
};

export default Detail;
