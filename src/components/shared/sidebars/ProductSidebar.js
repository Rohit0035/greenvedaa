"use client";
import SidebarBanner from "./widgets/SidebarBanner";
import SidebarSearch from "./widgets/SidebarSearch";
import ProductTags from "./widgets/ProductTags";
import ProductCategories from "./widgets/ProductCategories";
import PriceRange from "./widgets/PriceRange";
import SidebarTopRatedProducs from "./widgets/SidebarTopRatedProducs";
import ProductSizes from "./widgets/ProductSizes";

const ProductSidebar = () => {
  return (
    <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar">

       {/* <!-- Search Widget --> */}
      <SidebarSearch />

      {/* <!-- Category or Brands Widget --> */}
      {<ProductCategories />}

      {/* <!-- Price Filter Widget --> */}
      <PriceRange />


      {/* <!-- Size Widget --> */}
      <ProductSizes />

      {/* <!-- Top Rated Product Widget --> */}
      <SidebarTopRatedProducs />

      {/* <!-- Tagcloud Widget --> */}
      <ProductTags />

      {/* <!-- Color Widget --> */}

      {/* <!-- Banner Widget --> */}
      <SidebarBanner image={"/img/banner/banner-2.jpg"} />
    </aside>
  );
};

export default ProductSidebar;
