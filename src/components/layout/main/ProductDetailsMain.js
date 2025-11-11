"use client";
import CommonBreadcrumb from "@/components/sections/custom/CommonBreadcrumb";
import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
import ProductDetailsPrimary from "@/components/sections/product-details/ProductDetailsPrimary";
import Products5 from "@/components/sections/products/Products5";
import CommonContext from "@/providers/CommonContext";

const ProductDetailsMain = ({ title, text, type, isNotSidebar }) => {
  return (
    <main>
      <CommonBreadcrumb title="Product Detail" label="Home"/>
      <CommonContext value={{ type, isNotSidebar }}>
        <ProductDetailsPrimary />
      </CommonContext>
      <Products5 isRelated={true} title="Related Products" tag="// Foods" />
      {/* <Features4 /> */}
    </main>
  );
};

export default ProductDetailsMain;
