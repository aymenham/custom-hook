import { useState } from "react";
import { useStorage } from "../../hooks/useStorage";
import { User } from "../../interfaces";
export const StorageInputs = () => {
  const [userName, setUserName] = useState("");
  const [id, setID] = useState(0);
  /*  const [user, setUser] = useStorage<User>("user", {
    id: 0,
    username: "",
  }); */
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //setUser({ username: userName, id: id });
    const user = JSON.stringify({ username: userName, id: id });
    localStorage.setItem("user", user);

    setUserName("");
    setID(0);
  };
  return (
    <form className="storage-form" onSubmit={onSubmit}>
      <input
        value={id}
        onChange={(e) => setID(Number(e.target.value))}
        type="number"
        placeholder="ID ... "
        name=""
        id=""
      />
      <input
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        type="text"
        placeholder="Username ... "
        name=""
        id=""
      />
      <button type="submit">Store</button>
    </form>
  );
};
