import ProductCardPrimary from "@/components/shared/cards/ProductCardPrimary";
import getAllProducts from "@/libs/getAllProducts";
import React from "react";

const ProductHome = ({ isRelated, title, tag, pt, pb }) => {
  const products = getAllProducts()
    ?.sort((a, b) => b.disc - a.disc)
    .slice(0, 6);

  return (
    <div
      className={`ltn__product-slider-area ltn__product-gutter py-5 ${
        pb ? pb : ""
      }  ${pt ? pt : isRelated ? "" : ""}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className={`section-title-area   ${
                isRelated ? "ltn__section-title-2" : " text-center"
              }`}
            >
              {tag ? (
                <h6 className="section-subtitle ltn__secondary-color">{tag}</h6>
              ) : (
                ""
              )}
              <h1 className="section-title">
                {title ? title : "Our Products"}
                {isRelated ? <span>.</span> : ""}
              </h1>
            </div>
          </div>
        </div>
        <div className="row ltn__product-slider-item-four-active slick-arrow-1">
          {/* <!-- ltn__product-item --> */}
          {products?.map((product, idx) => (
            <div key={idx} className="col-lg-12">
              <ProductCardPrimary product={product} isShowDisc={true} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductHome;
