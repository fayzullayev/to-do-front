import { PaginationContainer, PaginationButton, Num } from './style.ts';
import { useEffect, useRef, useState } from 'react';

type Props = {
  pages: number;
  onPageChange: (page: number) => void;
  current?: number;
};

function Pagination({ onPageChange, pages: pagesCount, current = 1 }: Props) {
  const [pages, setPages] = useState<number>(pagesCount);
  const [currentPage, setCurrentPage] = useState<number>(current);
  const skipFirstEffect = useRef<number>(0);

  function handlePageChange(page: any) {
    setCurrentPage(page);
  }

  function forwards(page: number) {
    setCurrentPage((prevPage) => prevPage + page);
  }

  useEffect(() => {
    if (skipFirstEffect.current === 1) {
      onPageChange(currentPage);
    }
    skipFirstEffect.current = 1;
  }, [currentPage]);

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbers = 3;

    if (pages <= maxPageNumbers) {
      for (let i = 1; i <= pages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // currentPage ==1
      const startPage = Math.max(currentPage - 1, 1); //1
      const endPage = Math.min(currentPage + 1, pages); //2

      if (startPage > 1) {
        pageNumbers.push(1);
        if (startPage > 2) {
          pageNumbers.push('...');
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (endPage < pages) {
        if (endPage < pages - 1) {
          pageNumbers.push('...');
        }
        pageNumbers.push(pages);
      }
    }

    return pageNumbers;
  };

  return (
    <PaginationContainer>
      <PaginationButton
        onClick={currentPage !== 1 ? () => forwards(-1) : () => {}}
        className="pagination-btn"
        $isActive={currentPage !== 1}
      >
        <i className="fas fa-chevron-left"></i>
      </PaginationButton>

      {getPageNumbers().map((pageNumber, index) =>
        pageNumber === '...' ? (
          <span key={index}>...</span>
        ) : (
          <Num
            key={index}
            onClick={() => handlePageChange(pageNumber)}
            $isActive={pageNumber === currentPage}
          >
            {pageNumber}
          </Num>
        ),
      )}

      <PaginationButton
        onClick={currentPage !== pages ? () => forwards(1) : () => {}}
        $isActive={currentPage !== pages}
      >
        <i className="fas fa-chevron-right"></i>
      </PaginationButton>
    </PaginationContainer>
  );
}

export default Pagination;
