import React, { useState } from "react";
import PageContent from "../layout/PageContent";
import { ChevronDown, List } from "lucide-react";
import { LayoutGrid } from "lucide-react";

function Toolbar({ data }) {
  const [sortValue, setSortValue] = useState("popularity");
  const handleSortChange = (e) => {
    setSortValue(e.target.value);
    console.log("Seçilen Sıralama:", e.target.value);
  };

  const toolContent = data.toolbar;
  return (
    <section>
      <PageContent className="max-w-272.5 px-5 py-6 flex flex-col md:flex-row md:flex-wrap gap-6 items-center justify-center md:justify-between">
        <h6 className="font-bold text-second-text text-[14px]">
          {toolContent.resultText}
        </h6>
        <div className="flex gap-3.75 items-center">
          <h6 className="font-bold text-second-text text-[14px]">
            {toolContent.views}
          </h6>
          <LayoutGrid className="w-4 h-4 border border-light-gray-2 rounded-[5px] p-3.5 box-content cursor-pointer" />
          <List className="w-4 h-4 border border-light-gray-2 rounded-[5px] p-3.5 box-content cursor-pointer" />
        </div>
        <div className="flex gap-3.75">
          <div className="relative ">
            <select
              value={sortValue}
              onChange={handleSortChange}
              className="h-12.5 pl-4.5 pr-10 w-auto bg-selection-button border border-selection-border rounded-[5px] 
               font-montserrat text-[14px] text-second-text appearance-none cursor-pointer"
            >
                {toolContent.sortDefault.map((e,i)=>(
                    <option key={i} value={e.value}>{e.text}</option>
                ))}
            </select>
            <div className="absolute inset-y-0 right-4.5 flex items-center pointer-events-none">
              <ChevronDown className="w-4 h-4 text-second-text" />
            </div>            
          </div>
          <button className="font-montserrat font-bold text-light-text text-[14px] bg-primary rounded-[5px] px-6.75">{toolContent.filter}</button>
        </div>
      </PageContent>
    </section>
  );
}

export default Toolbar;
