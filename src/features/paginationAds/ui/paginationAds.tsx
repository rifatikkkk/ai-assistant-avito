import { PageButton } from "@/shared/ui/PageButton";
import "./paginationAds.style.css";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import {
  selectCurrentPage,
  selectTotalPages,
  setCurrentPage,
} from "@/entities/ad/model";
import { getVisiblePages } from "../model/utils/getVisiblePages";

export const PaginationAds = () => {
  const dispatch = useAppDispatch();

  const currentPage = useAppSelector(selectCurrentPage);
  const totalPages = useAppSelector(selectTotalPages);

  if (totalPages < 1) return null;

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    dispatch(setCurrentPage(page));
  };

  const visiblePages = getVisiblePages(totalPages, currentPage);
  const hasLeftEllipsis = visiblePages[0] > 1;
  const hasRightEllipsis = visiblePages[visiblePages.length - 1] < totalPages;

  return (
    <div className="switch-layout">
      <PageButton
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <img src="/svg/arrowPage.svg" alt="left-icon" className="arrow-left" />
      </PageButton>
      {hasLeftEllipsis && (
        <>
          <PageButton onClick={() => goToPage(1)}>1</PageButton>
        </>
      )}
      {visiblePages.map((page) => (
        <PageButton
          key={page}
          isActive={page === currentPage}
          onClick={() => goToPage(page)}
        >
          {page}
        </PageButton>
      ))}
      {hasRightEllipsis && (
        <>
          <PageButton onClick={() => goToPage(totalPages)}>
            {totalPages}
          </PageButton>
        </>
      )}
      <PageButton
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <img
          src="/svg/arrowPage.svg"
          alt="right-icon"
          className="arrow-right"
        />
      </PageButton>
    </div>
  );
};
