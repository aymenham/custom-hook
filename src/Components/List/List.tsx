import { useEffect, useState } from "react";
import axios from "../../axios";
import { useAxiosFetch } from "../../hooks/useAxiosFetch";
import Card from "./Card";

export type CardType = {
  id: number;
  name: string;
  image: string;
  status?: string;
};
const List = () => {
  //const { cards, error, loading } = useAxiosFetch<Card>("/character");
  const [cards, setCards] = useState<CardType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const getData = async () => {
    axios
      .get("/character")
      .then((result) => {
        setCards(result.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="list">
      {(cards as CardType[])?.map((card: CardType) => {
        return (
          <Card
            key={card.id}
            id={card.id}
            image={card.image}
            name={card.name}
          />
        );
      })}
    </div>
  );
};

export default List;
