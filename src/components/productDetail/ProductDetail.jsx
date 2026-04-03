import React, { useState, useEffect } from "react"; // useState ekledik
import PageContent from "../../layout/PageContent";

function ProductDetail({ data }) {
  const detailContent = data;
  const images = detailContent.images;
  const [currentImage, setCurrentImage] = useState(images.main);

  useEffect(() => {
    setCurrentImage(images.main);
  }, [images.main]);

  return (
    <section className="bg-light-gray-1">
      <PageContent className="detailcontainer flex flex-col md:flex-row gap-[30px] md:gap-[34px] items-center max-w-[1117px] px-5">
        <div className="imagecontainer flex flex-col gap-[42px] md:gap-5">
          <img
            className="w-full max-w-[506px] h-auto md:h-[450px] object-cover transition-all duration-300"
            src={currentImage}
            alt="product"
          />
          <div className="flex gap-5">
            {images.gallery.map((e, i) => (
              <img
                key={i}
                onClick={() => setCurrentImage(e)}
                className={`w-[100px] h-[75px] object-cover cursor-pointer transition-opacity hover:opacity-80 ${
                  currentImage === e
                    ? "opacity-50"
                    : "opacity-100 hover:opacity-80"
                }`}
                src={e}
                alt={`gallery-thumb-${i}`}
              />
            ))}
          </div>
        </div>
        <div className="textcontainer flex flex-col">
          <h4></h4>
          <div className="ratescore flex">
            {/*stars*/}
            <h6></h6>
          </div>
          <h3></h3>
          <h6>
            <span></span>
          </h6>
          <p></p>
          <div className="border border-light-gray-2 w-auto mb-2.5 md:mb-4.5"></div>{" "}
          {/* /br */}
          <div className="border border-light-gray-2 w-full mb-6 md:mb-4.5"></div>
          {/* /br */}
          <div className="pt-5 gap-1.5 flex ">
            <span className="h-4 w-4  rounded-full bg-primary"></span>
            <span className="h-4 w-4  rounded-full bg-secondary-1"></span>
            <span className="h-4 w-4  rounded-full bg-alert"></span>
            <span className="h-4 w-4  rounded-full bg-dark-background"></span>
          </div>
          <div className="flex">
            <button></button>
            <div className="iconcontainer flex ">

            </div>
          </div>
        </div>
      </PageContent>
    </section>
  );
}

export default ProductDetail;
