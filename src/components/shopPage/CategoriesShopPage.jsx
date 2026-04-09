import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PageContent from "../../layout/PageContent";

function CategoriesShopPage() {
  const categories = useSelector((state) => state.product.categories);

  const top5Categories = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  return (
    <section className="bg-light-gray-1 pb-9.25 md:pb-12">
      <PageContent className="flex flex-col md:flex-row md:flex-wrap items-center justify-center max-w-287 px-7.5 gap-3.75">
        {top5Categories.map((cat) => {
          const categorySlug = cat.code
            .split(":")[1]
            .replaceAll("ı", "i")
            .replaceAll("ö", "o")
            .replaceAll("ü", "u")
            .replaceAll("ş", "s")
            .replaceAll("ç", "c")
            .replaceAll("ğ", "g");
          return (
            <Link
              key={cat.id}
              to={`/shop/${cat.gender === "k" ? "kadin" : "erkek"}/${categorySlug}/${cat.id}`}
              className="relative group overflow-hidden mx-auto w-82.75 h-75 md:w-51 md:h-55.75 cursor-pointer"
            >
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115"
              />
              <div className="absolute inset-0 bg-black/25 flex flex-col items-center justify-center transition-colors group-hover:bg-black/40">
                <h5 className="font-montserrat font-bold text-white text-[16px] uppercase">
                  {cat.title}
                </h5>
                <p className="font-montserrat font-normal text-white text-[14px]">
                  Rating: {cat.rating}
                </p>
              </div>
            </Link>
          );
        })}
      </PageContent>
    </section>
  );
}

export default CategoriesShopPage;
