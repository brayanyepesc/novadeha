import { useMemo } from "react";
import { User } from "../types/types";

export const useFilterUsers = (users: User[], search: string) => {
  return useMemo(
    () =>
      users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      ),
    [users, search]
  );
};
