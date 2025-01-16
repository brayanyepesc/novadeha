import { Dispatch, SetStateAction } from "react";
import { User } from "../types/types";
import { UserCard } from "./UserCard";

export const UsersList = ({ users, onSelectUser }: { users: User[], onSelectUser: Dispatch<SetStateAction<User | null>> }) => {
  return (
    <ul className="list-none p-0 grid grid-cols-5 gap-2">
      {users.map((user) => (
        <UserCard key={user.id} user={user} onSelectUser={onSelectUser} />
      ))}
    </ul>
  );
};
