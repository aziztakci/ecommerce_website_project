import React from "react";

function PageContent({ children }) {
  return (
    <main className="w-full">  
      {children}  
    </main>        
  );
}

export default PageContent;

/* TODO- tüm componenti sarmalama, pagecontenti her componentin ilk section' etiketinden sonra içeriği sarmalayacak şekilde güncelle- */

/* function PageContent({ children, className = "" }) {
  return (
    <div className={`max-w-[1077px] mx-auto w-full px-5 md:px-0 ${className}`}>
      {children}
    </div>
  );
} ShopPage bitince bu yapıyı direkt her component için pagecontenti eklemeden hemen önce burada kullan*/

/* component içi kullanım 
  return (
    <section className="w-full bg-istediğin color vb.">
      <PageContent className = "istediğin tailwind classları"> 
      ...
    
       normalde pagecontent içinde className tanımlamıştık zaten max-w-[1077] gibi, 
       ancak her component için farklı css vermek gerekirse diye yukarıdaki yapıda ${calssName} -default parameter- kullandık, 
       prop olarak geldi, propu da className="" şeklinde belirledik,
       bir component içinde flex vs vermek istediğimizde <PageContent className="flex justify-between"> ... </PageContent> bu şekilde kullanabilmek için. 
       Bu sayede PageContent içindeki sabit sınıflar (max-w-[1077px] mx-auto w-full) ile sonradan yazdığım sınıflar birlecek.
  )
*/