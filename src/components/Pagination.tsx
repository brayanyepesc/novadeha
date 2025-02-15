import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

interface PaginationProps {
  currentPage: number;
  maxPage: number;
  onNext: () => void;
  onPrev: () => void;
}

export const Pagination = ({
  currentPage,
  maxPage,
  onNext,
  onPrev,
}: PaginationProps) => {
  return (
    <div className="flex items-center justify-between mt-4" aria-live="polite">
      <button
        onClick={onPrev}
        disabled={currentPage === 1}
        aria-disabled={currentPage === 1}
        className="px-4 py-2 bg-novaviolet text-white rounded disabled:bg-gray-300 dark:disabled:bg-gray-800"
        aria-label="Previous page"
      >
        <LuArrowLeft />
      </button>
      <span className="text-gray-700" aria-live="assertive">
        {currentPage} / {maxPage}
      </span>
      <button
        onClick={onNext}
        disabled={currentPage === maxPage}
        aria-disabled={currentPage === maxPage}
        className="px-4 py-2 bg-novaviolet text-white rounded disabled:bg-gray-300 dark:disabled:bg-gray-800"
        aria-label="Next page"
      >
        <LuArrowRight />
      </button>
    </div>
  );
};
