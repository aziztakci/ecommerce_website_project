import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux"; 
import { useSearchParams } from "react-router-dom"; 
import PageContent from "../../layout/PageContent";
import { ChevronDown, List, LayoutGrid } from "lucide-react";

function Toolbar() { 
  const { total } = useSelector((state) => state.product);
  const [searchParams, setSearchParams] = useSearchParams();

  const [filterText, setFilterText] = useState(searchParams.get("filter") || "");
  const [sortValue, setSortValue] = useState(searchParams.get("sort") || "");

  useEffect(() => {
    setSortValue(searchParams.get("sort") || "");
    setFilterText(searchParams.get("filter") || "");
  }, [searchParams]);

  const handleFilterClick = () => {    
    const newParams = new URLSearchParams(searchParams);
    
    if (filterText) {
      newParams.set("filter", filterText);
    } else {
      newParams.delete("filter");
    }

    if (sortValue) {
      newParams.set("sort", sortValue);
    }

    setSearchParams(newParams);
  };

  const handleSortChange = (e) => {
    const nextSort = e.target.value;
    setSortValue(nextSort);

    const newParams = new URLSearchParams(searchParams);
    if (nextSort) {
      newParams.set("sort", nextSort);
    } else {
      newParams.delete("sort");
    }
    
    setSearchParams(newParams);
  };

  const sortValues = [
    {value: "", text: "Sort by: Default"},
    {value: "price:asc", text: "Price: Low to High"},
    {value: "price:desc", text: "Price: High to Low"},
    {value: "rating:desc", text: "Rating: Highest"},
    {value: "rating:asc", text: "Rating: Lowest"},
  ];

  return (
    <section>
      <PageContent className="max-w-272.5 px-5 py-6 flex flex-col md:flex-row md:flex-wrap gap-6 items-center justify-center md:justify-between">
        <h6 className="font-bold text-second-text text-[14px]">
          Showing all {total} results
        </h6>

        <div className="flex gap-3.75 items-center">
          <h6 className="font-bold text-second-text text-[14px]">Views:</h6>
          <LayoutGrid className="w-4 h-4 border border-light-gray-2 rounded-[5px] p-3.5 box-content cursor-pointer" />
          <List className="w-4 h-4 border border-light-gray-2 rounded-[5px] p-3.5 box-content cursor-pointer" />
        </div>

        <div className="flex flex-wrap gap-3.75 justify-center">          
          <input 
            type="text"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            placeholder="Search products..."
            className="h-12.5 px-4 bg-selection-button border border-selection-border rounded-[5px] font-montserrat text-[14px] text-second-text focus:outline-none"
          />

          <div className="relative">
            <select
              value={sortValue}
              onChange={handleSortChange} 
              className="h-12.5 pl-4.5 pr-10 w-auto bg-selection-button border border-selection-border rounded-[5px] 
                font-montserrat text-[14px] text-second-text appearance-none cursor-pointer focus:outline-none"
            >
              {sortValues.map((e, i)=>(
                <option key={i} value={e.value}>{e.text}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-4.5 flex items-center pointer-events-none">
              <ChevronDown className="w-4 h-4 text-second-text" />
            </div>
          </div>
          
          <button 
            onClick={handleFilterClick}
            className="font-montserrat font-bold text-light-text text-[14px] bg-primary rounded-[5px] px-6.75 transition-colors hover:bg-opacity-90"
          >
            Filter
          </button>
        </div>
      </PageContent>
    </section>
  );
}

export default Toolbar;