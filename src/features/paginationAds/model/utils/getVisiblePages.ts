export const getVisiblePages = (totalPages: number, currentPage: number) => {
  const maxVisiblePages = 5;

  if (totalPages <= maxVisiblePages) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = startPage + maxVisiblePages - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = endPage - maxVisiblePages + 1;
  }

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }
  return pages;
};
