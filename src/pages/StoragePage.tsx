import { StorageInputs } from "../Components/Storage/StorageInputs";
import { UserWithID } from "../Components/Storage/UserWithID";
import { UserWithName } from "../Components/Storage/UserWithName";

export const StoragePage = () => {
  return (
    <div className="storage-page">
      <StorageInputs />
      <UserWithName />
      <UserWithID />
    </div>
  );
};
