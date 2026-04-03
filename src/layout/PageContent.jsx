import React from "react";

function PageContent({ children, className = "" }) {
  
  const baseClasses = "w-full mx-auto";
  // Eğer dışarıdan bir max-w göndermediysem, otomatik 1077 max-w olarak eklenecek:
  const maxWidthClass = className.includes("max-w-") ? "" : "max-w-[1077px]";

  return (
    <div className={`${baseClasses} ${maxWidthClass} ${className}`}>
      {children}
    </div>
  );
}

export default PageContent;
