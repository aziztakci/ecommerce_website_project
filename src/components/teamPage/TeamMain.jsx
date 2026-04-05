import React from "react";

function TeamMain({ teamContent, isLoading }) {
  const infoMain = teamContent.infoMain;
  if (isLoading) return null;

  return (
    <main className="flex flex-col md:flex-row w-full gap-2.5 md:h-132.5 md:max-h-132.5">
      <div className="flex-1 w-full md:h-full overflow-hidden">
        <img
          src={infoMain.mainImage}
          alt="main_image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 grid grid-cols-2 gap-2.5 w-full md:h-full md:max-h-132.5 overflow-hidden">
        {infoMain.images.map((e) => (
          <div key={e.id} className="w-full h-full overflow-hidden">
            <img
              src={e.image}
              alt="sub_image"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export default TeamMain;
