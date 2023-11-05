import React from 'react'
import ReactPaginate from 'react-paginate'

const PaginationComponent = ({ page, onPageChange, pageCount = 1 }) => {
  return (
    <>
      <div className="w-full flex justify-center pt-2">
        <ReactPaginate
          className="flex gap-2 items-center transition-colors text-slate-300 font-black"
          activeClassName="bg-[#6c7293]"
          pageClassName="w-8 h-8 rounded-full flex justify-center items-center bg-dark-them-active pt-1"
          previousLabel={
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </span>
          }
          nextLabel={
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </span>
          }
          pageCount={pageCount}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={onPageChange}
          forcePage={page}
        />
      </div>
    </>
  )
}

export default PaginationComponent