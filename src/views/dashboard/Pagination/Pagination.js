import React, { useState, useEffect } from 'react';
import { CButtonToolbar, CButtonGroup, CButton, CSpinner} from '@coreui/react'

const Pagination = (props) => {
const [pager, setPager] = useState({});
const [initialPage, setInitialPage] = useState(1);
const [pageSize, setPageSize] = useState();
const [currentPage, setCurrentPage] = useState(0);
const [lastPage,setLastPage] = useState(0);

useEffect(() => {
if (props.items && props.items.length) {
  setPage(initialPage);
  setPageSize(props.pageSize);
}
}, [props.items, initialPage, props.pageSize]);

useEffect(() => {
  if (props.items) {
    setPage(initialPage);
  }
}, [props.items, initialPage]);

const setPage = (page) => {
    let { items, pageSize } = props;
    let newPager = pager;

    newPager = getPager(items.length, page, pageSize);

    let pageOfItems = items.slice(newPager.startIndex, newPager.endIndex + 1);
    setPager(newPager);
    props.onChangePage(pageOfItems,newPager.startIndex + 1,newPager.endIndex + 1);
};

  const getPager = (totalItems, currentPage, pageSize) => {
  currentPage = currentPage || 1;
  pageSize = pageSize || 10;

  let totalPages = Math.ceil(totalItems / pageSize);
  let startPage, endPage;
  setLastPage(totalPages);
  setCurrentPage(currentPage);
  if (totalPages <= 5) {
    startPage = 1;
    endPage = totalPages;
  } else {
    if (currentPage <= 3) {
      startPage = 1;
      endPage = 5;
    } else if (currentPage + 2 >= totalPages) {
      startPage = totalPages - 4;
      endPage = totalPages;
    } else {
      startPage = currentPage - 2;
      endPage = currentPage + 2;
    }
  }

  let startIndex = (currentPage - 1) * pageSize;
  let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
  let pages = [...Array(endPage + 1 - startPage).keys()].map(i => startPage + i);

  return {
    totalItems: totalItems,
    currentPage: currentPage,
    pageSize: pageSize,
    totalPages: totalPages,
    startPage: startPage,
    endPage: endPage,
    startIndex: startIndex,
    endIndex: endIndex,
    pages: pages
  };
  };

  if (!pager.pages || pager.pages.length <= 1) {
  return null;
  }

return (
  <>
    <CButtonToolbar role="group" aria-label="Toolbar with button groups">
    <CButtonGroup className="me-2" role="group" aria-label="First group">
      <CButton className='pagination-color' disabled={pager.currentPage === 1} onClick={() => setPage(pager.currentPage - 1)}>Previous</CButton>
    </CButtonGroup>    
    <CButtonGroup className="me-2" role="group" aria-label="First group">
      {
        currentPage === 1 || currentPage === 2 || currentPage === 3 ? (
          <></>
        ) : (
          <CButton color="primary" className="pagination-color" onClick={() => setPage(1)}>1</CButton>      
        )
      }    
      {pager.pages.map((page, index) => (
        <CButton color="primary" key={index} className={pager.currentPage === page ? "pagination-color actives" : "pagination-color"} onClick={() => setPage(page)}>{page}</CButton>
      ))}    
      {
        currentPage === lastPage || currentPage === lastPage - 1 || currentPage === lastPage - 2 ? (
          <></>
        ) : (
          <CButton color="primary" className="pagination-color" onClick={() => setPage(lastPage)}>{lastPage}</CButton>      
        )
      }
    </CButtonGroup>
    <CButtonGroup className="me-2" role="group" aria-label="First group">
      <CButton className='pagination-color' disabled={pager.currentPage === pager.totalPages} onClick={() => setPage(pager.currentPage + 1)}>Next</CButton>
    </CButtonGroup>        
    </CButtonToolbar>
</>
);
};

export default Pagination;