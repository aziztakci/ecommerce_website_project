import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, setOffset } from "../../store/actions/productActions";

function PageNumButons() {
  
  const dispatch = useDispatch();

  const { total, limit, offset } = useSelector((state) => state.product);
  const totalPages = Math.ceil(total / limit);  
  const currentPage = Math.floor(offset / limit) + 1;

  const handlePageChange = (pageNumber) => {
    const newOffset = (pageNumber - 1) * limit;
    dispatch(setOffset(newOffset));    
    dispatch(fetchProducts({ limit, offset: newOffset }));
    
    window.scrollTo(0, 0);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center py-12">
      <div className="flex border border-light-gray-2 rounded-[5px] overflow-hidden shadow-light-drop">
        
        {/* First / Previous Butonu */}
        <button 
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          className="px-6 py-6 border-r border-light-gray-2 text-primary font-bold text-[14px] bg-light-background hover:bg-light-gray-1 transition-all disabled:text-muted"
        >
          First
        </button>

        {/* Dinamik Sayfa Numaraları */}
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-5 py-6 border-r border-light-gray-2 font-bold text-[14px] transition-all
              ${currentPage === page 
                ? "bg-primary text-white" 
                : "bg-light-background text-primary hover:bg-primary hover:text-white" 
              }`}
          >
            {page}
          </button>
        ))}

        {/* Next */}
        <button 
          onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-6 py-6 text-primary font-bold text-[14px] bg-light-background hover:bg-primary hover:text-white transition-all disabled:text-muted"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PageNumButons;