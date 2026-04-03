import React from "react";

function PageNumButons({ activePage, setActivePage }) {
  // Sayfa numaralarını bir dizi olarak tutabiliriz
  const pages = [1, 2, 3];

  return (
    <div className="flex justify-center items-center py-12 ">
      <div className="flex border border-light-gray-2 rounded-[5px] overflow-hidden shadow-light-drop ">
        
        <button 
          onClick={() => setActivePage(1)}
          disabled={activePage === 1}
          className="px-6 py-6 border-r border-light-gray-2 text-muted font-bold text-[14px] bg-light-background hover:bg-light-gray-1 transition-all disabled:opacity-50"
        >
          First
        </button>

        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setActivePage(page)}
            className={`px-5 py-6 border-r border-light-gray-2 font-bold text-[14px] transition-all
              ${activePage === page 
                ? "bg-primary text-white" 
                : "bg-light-background text-primary hover:bg-primary hover:text-white" 
              }`}
          >
            {page}
          </button>
        ))}

        <button 
          onClick={() => setActivePage((prev) => Math.min(prev + 1, 3))}
          disabled={activePage === 3}
          className="px-6 py-6 text-primary font-bold text-[14px] bg-light-background hover:bg-primary hover:text-white transition-all disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PageNumButons;