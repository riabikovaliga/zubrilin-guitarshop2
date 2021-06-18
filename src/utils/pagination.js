export const PAGE_DOTS = 'DOTS';
const PAGE_NEIGHBOURS = 1;

const range = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

export const fetchPageNumbers = (totalPages, currentPage) => {
  const totalNumbers = PAGE_NEIGHBOURS * 2 + 1;
  const totalBlocks = totalNumbers + 2;

  if (totalPages > totalBlocks) {
    const startPage = Math.max(2, currentPage - PAGE_NEIGHBOURS);
    const endPage = Math.min(totalPages - 1, currentPage + PAGE_NEIGHBOURS);
    let pages = range(startPage, endPage);

    const hasLeftSpill = startPage > 2;
    const hasRightSpill = endPage < totalPages - 1;

    switch (true) {
      case hasLeftSpill && !hasRightSpill: {
        pages = [PAGE_DOTS, ...pages];
        break;
      }
      case !hasLeftSpill && hasRightSpill: {
        pages = [...pages, PAGE_DOTS];
        break;
      }
      default: {
        pages = [PAGE_DOTS, ...pages, PAGE_DOTS];
        break;
      }
    }

    return [1, ...pages, totalPages];
  }

  return range(1, totalPages);
};
