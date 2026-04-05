import React from "react";
import PageContent from "../../layout/PageContent";
import { ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function InfoTop({ data }) {
  const infoTopContent = data.infoTop;
  const { pathname } = useLocation();
  const isShopPage = pathname.includes("/shop")
  const isProductPage = pathname.includes("/product");
  const isTeamPage = pathname.includes("/team");

  return (
    <section className={`py-6 ${!isTeamPage ? "bg-light-gray-1": "bg-white" }`}> 
      <PageContent 
        className={`max-w-272.5 gap-7.5 mx-auto px-5 flex flex-col md:flex-row md:flex-wrap items-center ${
          isProductPage ? "justify-start" : isShopPage ? "justify-between" : "justify-center"
        }`}
      >        
        {isShopPage  && (
          <h3 className="font-montserrat font-bold text-text text-[24px] md:py-1.5">
            {infoTopContent.title}
          </h3>
        )}
        <nav>
          <ul className="flex items-center py-2.5">
            {infoTopContent.breadcrumb.map((e, i) => {
              const isLast = i === infoTopContent.breadcrumb.length - 1;

              return (
                <React.Fragment key={i}>
                  <li
                    className={`font-montserrat font-bold text-[14px] ${isLast ? "text-muted" : "text-text"}`}
                  >
                    {!isLast ? (
                      <Link
                        to={
                          e.toLowerCase() === "home"
                            ? "/"
                            : `/${e.toLowerCase()}`
                        }
                        className="hover:text-danger transition-all"
                      >
                        {e}
                      </Link>
                    ) : (
                      <span>{e}</span>
                    )}
                  </li>

                  {!isLast && <ChevronRight className="text-muted" />}
                </React.Fragment>
              );
            })}
          </ul>
        </nav>
      </PageContent>
    </section>
  );
}

export default InfoTop;
