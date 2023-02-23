import { useEffect, useState } from "react";
import axios from "../axios";

export const useAxiosFetch = <T>(url: string) => {
  const [cards, setCards] = useState<T | T[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((result) => {
        if (result.data.results) setCards(result.data.results);
        else setCards(result.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { loading, error, cards };
};
