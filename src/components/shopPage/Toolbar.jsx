import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"; 
import { fetchProducts } from "../../store/actions/productActions";
import PageContent from "../../layout/PageContent";
import { ChevronDown, List, LayoutGrid } from "lucide-react";

function Toolbar() { 
  const dispatch = useDispatch();
  const { total, limit } = useSelector((state) => state.product);
  
  const [sortValue, setSortValue] = useState("");

  const handleSortChange = (e) => {
    const selectedSort = e.target.value;
    setSortValue(selectedSort);

    dispatch(fetchProducts({ 
      sort: selectedSort, 
      limit: limit, 
      offset: 0 
    }));
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

        <div className="flex gap-3.75">
          <div className="relative">
            <select
              value={sortValue}
              onChange={handleSortChange}
              className="h-12.5 pl-4.5 pr-10 w-auto bg-selection-button border border-selection-border rounded-[5px] 
                font-montserrat text-[14px] text-second-text appearance-none cursor-pointer focus:outline-none"
            >
              {sortValues.map((e)=>(
                <option value={e.value}>{e.text}</option>
              ))}
              
            </select>
            <div className="absolute inset-y-0 right-4.5 flex items-center pointer-events-none">
              <ChevronDown className="w-4 h-4 text-second-text" />
            </div>
          </div>
          
          <button 
            onClick={() => dispatch(fetchProducts({ limit, offset: 0 }))}
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