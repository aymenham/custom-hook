import { useStorage } from "../../hooks/useStorage";
import { User } from "../../interfaces";

export const UserWithName = () => {
  /* const [user, setUSer] = useStorage<User>("user", null); */
  const store = localStorage.getItem("user");
  const user = store ? JSON.parse(store) : null;

  return (
    <div className="storage-card">
      <h1>composant A</h1>
      <p>je suis le composant A et j'ai besoin du username </p>
      <h3>la valeur du username est : {user?.username} </h3>
    </div>
  );
};
