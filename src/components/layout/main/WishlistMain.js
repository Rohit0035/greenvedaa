import CommonBreadcrumb from "@/components/sections/custom/CommonBreadcrumb";
import WishlistPrimary from "@/components/sections/wishlist/WishlistPrimary";
import React from "react";

const WishlistMain = () => {
  return (
    <main>
      <CommonBreadcrumb title="WishList" label="Home"/>
      <WishlistPrimary />
    </main>
  );
};

export default WishlistMain;
