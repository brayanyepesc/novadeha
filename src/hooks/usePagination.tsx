import { useState, useMemo } from "react";
import { User } from "../types/types";

interface UsePaginationProps {
  users: User[];
  usersPerPage: number;
}

export const usePagination = ({ users, usersPerPage }: UsePaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const maxPage = Math.ceil(users.length / usersPerPage);

  const currentUsers = useMemo(() => {
    const start = (currentPage - 1) * usersPerPage;
    const end = start + usersPerPage;
    return users.slice(start, end);
  }, [users, currentPage, usersPerPage]);

  const next = () => setCurrentPage((prev) => Math.min(prev + 1, maxPage));
  const prev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return { currentUsers, currentPage, maxPage, next, prev, setCurrentPage };
};
