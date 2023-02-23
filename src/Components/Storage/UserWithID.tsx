import { useStorage } from "../../hooks/useStorage";
import { User } from "../../interfaces";

export const UserWithID = () => {
  //const [user, setUSer] = useStorage<User>("user", null);
  const store = localStorage.getItem("user");
  const user = store ? JSON.parse(store) : null;

  return (
    <div className="storage-card ">
      <h1>composant B</h1>
      <p> je suis le composant B et j'ai besoin d' ID de l'utilisateur </p>
      <h3>la valeur de id est : {user?.id} </h3>
    </div>
  );
};
