interface PaginationProps {
  totalPages: number;
  currentPage: number;
  handlePageChange: (newPage: number) => void;
}

const Pagination = ({
  totalPages,
  currentPage,
  handlePageChange,
}: PaginationProps) => {
  const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex justify-center">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        type="button"
        className="w-[40px] h-[40px] mr-4  my-6 enabled:hover:text-red-600 
          rounded-lg border-2 enabled:border-gray-400 disabled:bg-gray-200
          enabled:hover:border-indigo-700"
      >
        &lt;
      </button>
      {pagesArray.map((pg) => {
        return (
          <button
            key={pg}
            onClick={() => handlePageChange(pg)}
            type="button"
            className={`w-[40px] h-[40px] mx-1 
              my-6 rounded-lg border-2 hover:text-red-600
              ${
                pg === currentPage
                  ? "border-indigo-700 "
                  : "border-gray-400 hover:border-indigo-700 "
              }`}
          >
            {pg}
          </button>
        );
      })}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        type="button"
        className="w-[40px] h-[40px] ml-4  my-6 enabled:hover:text-red-600 
          rounded-lg border-2 enabled:border-gray-400 disabled:bg-gray-200
          enabled:hover:border-indigo-700"
      >
        &gt;
      </button>
    </nav>
  );
};

export default Pagination;
